const template = {
  geometry: {
    coordinates: undefined,
    type: "Point"
  },
  properties: {
    category: undefined,
    elementId: undefined,
    location: undefined ,
    name: undefined
  },
  type: "Feature"
}

module.exports = function(raw, index) {
  let final = Object.assign({}, template)
  final.geometry.coordinates = [raw.lng, raw.lat]
  final.properties.category = raw.category
  final.properties.location = raw.location
  final.properties.name = raw.name
  final.properties.elementId = `${raw.name.toLowerCase()}-${raw.category.split(" ")[1]}`
  return final;
}
