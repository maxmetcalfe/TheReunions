import React from "react"
import renderer from "react-test-renderer"
import ReunionList from "../../client/components/ReunionList"

test("ReunionList", () => {
  let reunions = {
    features: [
      {
        properties: {
          name: "Boston 2014",
          location: "Boston",
          category: "four"
        }
      },
      {
        properties: {
          name: "Charleston 2012",
          location: "Charleston",
          category: "three"
        }
      },
      {
        properties: {
          name: "New York 2011",
          location: "New York",
          category: "two"
        }
      }
    ]
  }

  let component = renderer.create(
    <ReunionList reunions={reunions} ></ReunionList>
  )

  expect(component).toMatchSnapshot()
})

test("ReunionList, single reunion", () => {
  let reunions = {
    features: [
      {
        properties: {
          name: "Boston 2014",
          location: "Boston",
          category: "Cat 4"
        }
      }
    ]
  }

  let component = renderer.create(
    <ReunionList reunions={reunions} ></ReunionList>
  )

  expect(component).toMatchSnapshot()
})