build:
	npm run build

test:
	npm run test-local

test-ci:
	npm run test

dev: build
	npm run dev

data: data/input_data.txt
	npm run data

start:
	npm run start

.PHONY: build test test-ci dev data start