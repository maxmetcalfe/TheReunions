import React from "react"
import renderer from "react-test-renderer"
import { MemberIcon } from "../../client/components/MemberIcon"

const reunions = {
  features: [
    {
      properties: {
        name: "Boston 2014",
        element_id: "Boston2014four",
        location: "Boston",
        category: "four"
      }
    },
    {
      properties: {
        name: "Charleston 2012",
        element_id: "Boston2014three",
        location: "Charleston",
        category: "three"
      }
    },
    {
      properties: {
        name: "New York 2011",
        element_id: "Boston2014two",
        location: "New York",
        category: "two"
      }
    }
  ]
};

const summaryCounts = {
    "j":{"four": 5, "three": 4, "two": 4},
    "m":{"four": 5, "three": 3, "two": 3},
    "d":{"four": 5, "three": 2, "two": 2},
    "g":{"four": 5, "three": 1, "two": 1},
}

const reunionsForMember = {
  "d": [
    { "category": "three", "element_id": "june2018THREE-Boston-1", "location": "Boston ", "name": "June 2018" },
    { "category": "two", "element_id": "july2018TWO-Boston-1", "location": "Boston ", "name": "July 2018" },
    { "category": "one", "element_id": "august2018ONE-Boston-1", "location": "Boston ", "name": "August 2018" }
  ],
  "g": [
    { "category": "three", "element_id": "june2018THREE-Boston-1", "location": "Boston ", "name": "June 2018" },
    { "category": "two", "element_id": "july2018TWO-Boston-1", "location": "Boston ", "name": "July 2018" },
    { "category": "one", "element_id": "august2018ONE-Boston-1", "location": "Boston ", "name": "August 2018" }
  ],
  "j": [
    { "category": "three", "element_id": "june2018THREE-Boston-1", "location": "Boston ", "name": "June 2018" },
    { "category": "two", "element_id": "july2018TWO-Boston-1", "location": "Boston ", "name": "July 2018" },
    { "category": "one", "element_id": "august2018ONE-Boston-1", "location": "Boston ", "name": "August 2018" }
  ],
  "m": [
    { "category": "three", "element_id": "june2018THREE-Boston-1", "location": "Boston ", "name": "June 2018" },
    { "category": "two", "element_id": "july2018TWO-Boston-1", "location": "Boston ", "name": "July 2018" },
    { "category": "three", "element_id": "august2014THREE-Boston-1", "location": "Boston ", "name": "August 2014" }
  ]
}

test("MemberIcon", () => {
  let component = renderer.create(
    <MemberIcon member="d" summaryCounts={summaryCounts} reunionsForMember={reunionsForMember}></MemberIcon>
  )
  expect(component).toMatchSnapshot()
})

