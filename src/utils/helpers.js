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

function getParasData(data) {
    let paras = [];

    Object.keys(data).forEach((key) => {
        if (key.match(/(p_\d*_value)/g)) {
            paras.push(data[key])
        }
    });
    return paras;
}

function objectAttrSum(object, key) {
    console.log(object[0][key]);
    return object.reduce((a, b) => a + (parseInt(b[key]) || 0), 0);
}

// function normaliseVal(inputVal, rangeMin, rangeMax, normMin, normMax) {
//     const percent = (inputVal - rangeMin) / (rangeMax - rangeMin);
//     const output = percent * (normMax - normMin) + normMin;
//
//     return output
// }

function normaliseVal(oldValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin)
    const newRange = (newMax - newMin)
    const newValue = (((oldValue - oldMin) * newRange) / oldRange) + newMin

    return newValue;
}


export {getCitiesData, getParasData, objectAttrSum, normaliseVal};
