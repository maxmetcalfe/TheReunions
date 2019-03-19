
// Remove picked style from all annotations on the map.
export default function resetMap(map) {
  if (!map) {
    return;
  }

  let selectedReunions = map.querySelectorAll(".picked");
  selectedReunions.forEach(function(r) {
    r.classList.remove("picked");
  })
  
  return map;
}
