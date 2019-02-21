import React from "react"
import renderer from "react-test-renderer"
import Header from "../../client/components/Header"

test("Header", () => {
  let component = renderer.create(<Header></Header>)

  expect(component).toMatchSnapshot()
})
