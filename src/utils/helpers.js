// Check if browser is IE11
function isIE11() {
    // IF check needed for the pre-rendered html files
    if (typeof window !== "undefined") {
        return !!window.MSInputMethodContext && !!document.documentMode;
    }
}

// Extract the cities data from the provided JSON file
function getCitiesData(data) {
    let cities = [];

    Object.keys(data).forEach((key) => {
        if (key.match(/(compare-tabs_1_city_\d*_)/g)) {
            const splitKeyArr = key.split("_");
            const cityProp = splitKeyArr[splitKeyArr.length - 1];
            const cityId = splitKeyArr[splitKeyArr.length - 2] - 1;
            if (!cities[cityId]) {
                cities.push({});
            }
            cities[cityId][cityProp] = data[key];
        }
    });

    return cities;
}

// Extract the all paragraphs data from the provided JSON file
function getParasData(data) {
    let paras = [];

    Object.keys(data).forEach((key) => {
        if (key.match(/(p_\d*_value)/g)) {
            paras.push(data[key])
        }
    });

    return paras;
}

// Match an input value from a range to one in a different range, maintaining the same ration between the passed value and its range
function normaliseVal(inputValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin)
    const newRange = (newMax - newMin)

    return (((inputValue - oldMin) * newRange) / oldRange) + newMin;
}

// Return the min and max of an object key
function objectMinMax(array, key) {
    const max = Math.max(...array.map((object) => {
        return object[key];
    }));
    const min = Math.min(...array.map((object) => {
        return object[key];
    }));

    return {min, max}
}

export {isIE11, getCitiesData, getParasData, objectMinMax, normaliseVal};
