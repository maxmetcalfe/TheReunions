import React from "react"
import renderer from "react-test-renderer"
import CategoryDescriptions from "../../client/components/CategoryDescriptions"

test("CategoryDescriptions", () => {
  let component = renderer.create(<CategoryDescriptions></CategoryDescriptions>)

  expect(component).toMatchSnapshot()
})
