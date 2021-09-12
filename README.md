# bbc-vj-air-quality-assessment-task
## Description
A BBC News Article with interactive content about how smoking affects the air quality in various Indian cities.

**Browser Compatibility**: IE11 and up.

## How to run
``` bash
# install dependencies
npm install

# run non-pre-rendered development version
npm start

# build for production with minification
# generates ./dist folder
npm run build

# test the production build locally
# serves ./dist folder
npm run serve
```

### IE11
To run in IE, the best approach would be to build the rendered HTML files and serve that production build: 
``` bash
npm run start:prod
```
Check the terminal messages - Preact should assign your app a local and network address to test the website on.

## Project requirements
Must have:
- [x] Ability for users to choose a city and see air quality in the form of cigarettes and particulate matter (PM2.5)
- [x] all text fields from the data json file displaying in a logical manner
- [x] All production files output into a ./dist folder ready for making live.

Nice to have:
- [x] A version in hindi (data also supplied in separate JSON file)
- [x] Test cases for your code. (located in ``./features/feature-file.feature``)

## Creative additions
As an addition to the project, a 'smoked-cigarettes gauge indicator' was added (not part of the requirements) to provide more insight from the provided data.


