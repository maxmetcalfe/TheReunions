import React from "react"
import renderer from "react-test-renderer"
import Coin from "../../src/components/Coin"

test("Coin", () => {
  let component = renderer.create(<Coin type="four"></Coin>)

  expect(component).toMatchSnapshot()
});