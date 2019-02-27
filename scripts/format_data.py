# This script ingests input_dat.txt and returns two JS objects.
# 1. app/js/summaryCounts.js: This counts how many reunions of each type a
# member has in his history.
# 2. app/js/reunions.js: This is a list of all the reunions, used for map display.

from geojson import Feature, Point, FeatureCollection
import requests, json

# Define paths for data files.
input_data_path = "data/input_data.txt"
output_reunions_path = "server/data/reunionData.js"
output_summary_path = "server/data/countData.js"

# Define an empty dictionary for each member.
m_reunions = { "four": 0, "three": 0, "two": 0 }
j_reunions = { "four": 0, "three": 0, "two": 0 }
g_reunions = { "four": 0, "three": 0, "two": 0 }
d_reunions = { "four": 0, "three": 0, "two": 0 }

# Define an empty dictionary for the reunions for member lookup.
reunions_for_member = { "m": [], "j": [], "g": [], "d": [] }

# Define a mapping between the member and his column in the input data.
members = { "m": 5, "j": 4, "g": 2, "d": 3 }

# Define a mapping between the numeric reunion type and a dictionary key string.
typeName = {
    "4": "four",
    "3": "three",
    "2": "two"
}

# Define the Google Geocoding API url to be used for geocoding a reunion's location.
geocoding_url = "https://api.tiles.mapbox.com/geocoding/v5/mapbox.places/QUERY.json?access_token=pk.eyJ1IjoibWF4bWV0Y2FsZmUiLCJhIjoiY2o3aWhnazV5MXR3ZTJ3cXViYXRucWJocCJ9.b1B3HrGStBqybxmCEafK0Q"

# Define an empty array for all reunions.
reunions = []

# Create array for calculating unique element ids.
element_ids = []

# Load the local version of input_data.txt
data_file = open(input_data_path, "r")

# Calculate the total number of each reunion type per member.
for line in data_file:
    line_split = line.split(",")[:-2]
    reunion_cat = typeName[str(line_split.count("X"))].replace(" ", "")
    location = line_split[1]
    name = line_split[0]
    element_id_base = name.replace(" ", "").lower() + reunion_cat.upper() + "-" + location.replace(" ", "")
    element_id = element_id_base + "-" + str(element_ids.count(element_id_base) + 1)
    element_ids.append(element_id_base)
    reunion = { "category": reunion_cat, "location": location, "name": name, "element_id": element_id }
    reunions.append(reunion)
    for m in members.keys():
        count_index = members[m]     
        if line_split[int(count_index)] == "X":
            reunions_for_member[m].append(reunion)
            eval(m + "_reunions")[reunion_cat] += 1

# Write out the summary info to output_summary_path.
summary_js_file = open(output_summary_path, "w")
summary_js_file.write("var summaryCounts = {\n")
for m in members.keys():
    summary_js_file.write('''    "''' + m + '''":''' + str(eval(m + "_reunions")) + ",\n")
summary_js_file.write("};\n\n")
summary_js_file.write("exports.summaryCounts = summaryCounts;\n")
summary_js_file.close()

# Write out the reunions to output_reunions_path.
reunions_js_file = open(output_reunions_path, "w")
reunions_js_file.write("var reunions = ")

# Great GeoJSON features, geocode the reunion location.
geojson_features = []
for r in reunions:
    target_url = geocoding_url.replace("QUERY", r["location"])
    response = requests.get(target_url).json()
    coordinates = response["features"][0]["center"]
    latitude = coordinates[1]
    longitude = coordinates[0]
    my_feature = Feature(geometry=Point((longitude, latitude)), properties={"category": r["category"], "name": r["name"], "location": r["location"], "element_id": r["element_id"]})
    geojson_features.append(my_feature)

feature_collection = FeatureCollection(geojson_features)

# Write reuniuons GeoJSON to file.
reunions_js_file.write(str(feature_collection))
reunions_js_file.write(";")

# Write reunions for member to file
reunions_js_file.write("\n\nvar reunionsForMember =")
reunions_js_file.write(str(reunions_for_member))
reunions_js_file.write(";\n\n")
reunions_js_file.write("exports.reunions = reunions;\nexports.reunionsForMember = reunionsForMember;\n")
reunions_js_file.close()
