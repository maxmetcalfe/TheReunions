import React from "react";
import Coin from "../../src/components/Coin";
import renderer from "react-test-renderer";

test("Coin", () => {
  const component = renderer.create(
    <Coin></Coin>,
  );
  expect(component.toJSON());
});