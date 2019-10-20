import formatData from "../utils/format-data";

export default (state = {}, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return {
        ...state,
        data: formatData(action.data)
      }
    default:
      return state;
  }
}
