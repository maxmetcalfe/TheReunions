import resetMap from "../../client/utils/resetMap"

function createFakeMap(annotationCount) {
  let fakeMap = document.createElement("div");
  for (let i = 0; i < annotationCount; i++) {
    let annotation = document.createElement("div");
    annotation.classList.add("picked");
    fakeMap.appendChild(annotation);
  }
  return fakeMap;
}

test("resetMap() resets all the annotations on a map", () => {
  let fakeMap = createFakeMap(10);
  let modifiedMap = resetMap(fakeMap);
  expect(modifiedMap.querySelectorAll(".picked").length).toBe(0);
})

test("resetMap() returns early if not supplied a map", () => {
  expect(resetMap()).toBeUndefined;
})
