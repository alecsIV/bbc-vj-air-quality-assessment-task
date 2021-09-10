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

function normaliseVal(oldValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin)
    const newRange = (newMax - newMin)
    const newValue = (((oldValue - oldMin) * newRange) / oldRange) + newMin

    return newValue;
}

// function objectAttrSum(object, key) {
//     console.log(object[0][key]);
//     return object.reduce((a, b) => a + (parseInt(b[key]) || 0), 0);
// }

function objectMinMax(array, key) {
    const max = Math.max.apply(Math, array.map((object) => { return object[key]; }));
    const min = Math.min.apply(Math, array.map((object) => { return object[key]; }));

    console.log('min', min);
    console.log('max', max);

    return {min, max}
}

// function normaliseVal(inputVal, rangeMin, rangeMax, normMin, normMax) {
//     const percent = (inputVal - rangeMin) / (rangeMax - rangeMin);
//     const output = percent * (normMax - normMin) + normMin;
//
//     return output
// }



export {getCitiesData, getParasData, objectMinMax, normaliseVal};
