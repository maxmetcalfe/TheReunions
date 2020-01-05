import React from "react"
import renderer from "react-test-renderer"
import configureStore from "redux-mock-store"
import { Provider } from "react-redux"
import { MemberTable } from "../../client/components/MemberTable"

let mockStore = configureStore();

const summaryCounts = {
    "j": { "four": 5, "three": 4, "two": 4 },
    "m": { "four": 5, "three": 3, "two": 3 },
    "d": { "four": 5, "three": 2, "two": 2 },
    "g": { "four": 5, "three": 1, "two": 1 },
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

test("MemberTable", () => {
  let store = mockStore({});
  let component = renderer.create(
    <Provider store={store}>
      <MemberTable summaryCounts={summaryCounts} reunionsForMember={reunionsForMember} ></MemberTable>
    </Provider>
  )

  expect(component).toMatchSnapshot()
})
