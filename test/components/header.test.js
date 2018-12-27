import React from "react"
import renderer from "react-test-renderer"
import Header from "../../src/components/Header"

test("Header", () => {
  let component = renderer.create(<Header></Header>)

  expect(component).toMatchSnapshot()
})
