import React from "react"
import renderer from "react-test-renderer"
import CategoryDescriptions from "../../src/components/CategoryDescriptions"

test("CategoryDescriptions", () => {
  let component = renderer.create(<CategoryDescriptions></CategoryDescriptions>)

  expect(component).toMatchSnapshot()
})
