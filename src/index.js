var React = require("react");
var ReactDOM = require("react-dom");

var countdata = require("./data/countData.js");
var reunionData = require("./data/reunionData.js");

require("./main.css");

import App from "./components/App";

ReactDOM.render(<App summaryCounts={countdata.summaryCounts} reunions={reunionData.reunions} reunionsForMember={reunionData.reunionsForMember}/>, document.getElementById("app"));

require("./map.js");
