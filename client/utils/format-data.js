import constants from "../constants";

const FEATURE = {
  geometry: {
    coordinates: [-71.0596, 42.3605],
    type: "Point"
  },
  properties: {
    category: "",
    element_id: "",
    location: "",
    name: ""
  },
  type: "Feature"
};

// Build out summaryCounts and reunionsForMember objects.
let summaryCounts = {};
let reunionsForMember = {};
constants.MEMBERS.forEach((member) => {
  summaryCounts[member] = {};
  reunionsForMember[member] = [];
  for (let category in constants.CATEGORIES) {
    summaryCounts[member][constants.CATEGORIES[category]] = 0;
  }
});

function createElementId(reunion, index) {
  return reunion.name.toLowerCase().replace(/ /g,"") +
    "-" + reunion.category.split(" ")[1] + 
    "-" + reunion.location.replace(/ /g,"") +
    "-" + index.toString();
}

export default function formatData(data) {
  console.log("Transforming data....");
  console.log(data.transformed);
  if (!data.length) {
    return data;
  }

  let transformedReunions = data.reduce((acc, cur, index) => {

    // Transform reunion into reunion object.
    let transformed = JSON.parse(JSON.stringify(FEATURE));
    transformed.properties.name = cur.name;
    transformed.properties.location = cur.location;
    transformed.properties.element_id = createElementId(cur, index);
    transformed.properties.category = cur.category;
    transformed.geometry.coordinates = [cur.lng, cur.lat];
    acc = [transformed].concat(acc);

    // Add count to summary counts.
    // Add transformed reunion object to reunionsForMember.
    let members = cur.members.length === 1 ? [cur.members] : cur.members.split("");
    members.map((member) => {
      let memberKey = member.toLowerCase();
      summaryCounts[memberKey][constants.CATEGORIES[cur.category]] = summaryCounts[memberKey][constants.CATEGORIES[cur.category]] + 1;
      reunionsForMember[memberKey].push(transformed);
    })
    
    return acc;
  }, []);

  return {
    transformed: true,
    reunions: {
      features: transformedReunions,
      type: "FeatureCollection"
    },
    summaryCounts: summaryCounts,
    reunionsForMember: reunionsForMember
  }
}
