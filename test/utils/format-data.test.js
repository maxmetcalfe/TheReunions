import formatData from "../../client/utils/format-data"

const RAW_DATA = [
  {
    "name": "July 2011",
    "location": "Las Vegas",
    "lat": "36.1699412",
    "lng": "-115.1398296",
    "category": "Cat 4",
    "members": "GDJM"
  },
  {
    "name": "February 2012",
    "location": "Boston",
    "lat": "42.3600825",
    "lng": "-71.0588801",
    "category": "Cat 4",
    "members": "GDJM"
  },
  {
    "name": "August 2012",
    "location": "Los Angeles",
    "lat": "34.0522342",
    "lng": "-118.2436849",
    "category": "Cat 3",
    "members": "DJM"
  }
]

test("formatData() returns the expected data", () => {
  expect(formatData(RAW_DATA)).toEqual({"reunions": {"features": [{"geometry": {"coordinates": ["-118.2436849", "34.0522342"], "type": "Point"}, "properties": {"category": "Cat 3", "element_id": "august2012-3-LosAngeles-2", "location": "Los Angeles", "name": "August 2012"}, "type": "Feature"}, {"geometry": {"coordinates": ["-71.0588801", "42.3600825"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "february2012-4-Boston-1", "location": "Boston", "name": "February 2012"}, "type": "Feature"}, {"geometry": {"coordinates": ["-115.1398296", "36.1699412"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "july2011-4-LasVegas-0", "location": "Las Vegas", "name": "July 2011"}, "type": "Feature"}], "type": "FeatureCollection"}, "reunionsForMember": {"d": [{"geometry": {"coordinates": ["-115.1398296", "36.1699412"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "july2011-4-LasVegas-0", "location": "Las Vegas", "name": "July 2011"}, "type": "Feature"}, {"geometry": {"coordinates": ["-71.0588801", "42.3600825"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "february2012-4-Boston-1", "location": "Boston", "name": "February 2012"}, "type": "Feature"}, {"geometry": {"coordinates": ["-118.2436849", "34.0522342"], "type": "Point"}, "properties": {"category": "Cat 3", "element_id": "august2012-3-LosAngeles-2", "location": "Los Angeles", "name": "August 2012"}, "type": "Feature"}], "g": [{"geometry": {"coordinates": ["-115.1398296", "36.1699412"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "july2011-4-LasVegas-0", "location": "Las Vegas", "name": "July 2011"}, "type": "Feature"}, {"geometry": {"coordinates": ["-71.0588801", "42.3600825"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "february2012-4-Boston-1", "location": "Boston", "name": "February 2012"}, "type": "Feature"}], "j": [{"geometry": {"coordinates": ["-115.1398296", "36.1699412"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "july2011-4-LasVegas-0", "location": "Las Vegas", "name": "July 2011"}, "type": "Feature"}, {"geometry": {"coordinates": ["-71.0588801", "42.3600825"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "february2012-4-Boston-1", "location": "Boston", "name": "February 2012"}, "type": "Feature"}, {"geometry": {"coordinates": ["-118.2436849", "34.0522342"], "type": "Point"}, "properties": {"category": "Cat 3", "element_id": "august2012-3-LosAngeles-2", "location": "Los Angeles", "name": "August 2012"}, "type": "Feature"}], "m": [{"geometry": {"coordinates": ["-115.1398296", "36.1699412"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "july2011-4-LasVegas-0", "location": "Las Vegas", "name": "July 2011"}, "type": "Feature"}, {"geometry": {"coordinates": ["-71.0588801", "42.3600825"], "type": "Point"}, "properties": {"category": "Cat 4", "element_id": "february2012-4-Boston-1", "location": "Boston", "name": "February 2012"}, "type": "Feature"}, {"geometry": {"coordinates": ["-118.2436849", "34.0522342"], "type": "Point"}, "properties": {"category": "Cat 3", "element_id": "august2012-3-LosAngeles-2", "location": "Los Angeles", "name": "August 2012"}, "type": "Feature"}]}, "summaryCounts": {"d": {"five": 0, "four": 2, "three": 1, "two": 0}, "g": {"five": 0, "four": 2, "three": 0, "two": 0}, "j": {"five": 0, "four": 2, "three": 1, "two": 0}, "m": {"five": 0, "four": 2, "three": 1, "two": 0}}});
})
