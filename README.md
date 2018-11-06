# The Reunions

[![travis](https://travis-ci.org/maxmetcalfe/TheReunions.svg?branch=master)](https://travis-ci.org/maxmetcalfe/TheReunions)

This is a web app to display the current status of The Reunions.

## Updating the reunion data

The initial reunion data is entered in a Google Sheet by reunion members. This is typically done in the field during or after a reunion. Currently, a manual step is required to update this app to reflect the latest data.

Copy and paste the reunion list from the Google Sheet and paste it into `data/input_data.txt`. Next, run:

`make data`

A Python script will parse the input data and generate two JavaScript files:

- `src/data/countData.js`

- `src/data/reunonData.js`

The app loads these files to source the necessary reunion data.

NOTE: This Python script geocodes each reunion location name (e.g. "Chicago" or "Las Vegas") to retreive a lat, lng coordinate for use on the map. This may not always work, so it is helpful to check the map for incorrect points during an update.

In the future, this app will pull directly from the Google Sheet.

## Testing locally

Run the below command to spin up a local dev server:

`make dev`



