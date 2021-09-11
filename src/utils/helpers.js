function isIE11(){
    return !!window.MSInputMethodContext && !!document.documentMode;
}

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

function normaliseVal(inputValue, oldMin, oldMax, newMin, newMax) {
    const oldRange = (oldMax - oldMin)
    const newRange = (newMax - newMin)

    return (((inputValue - oldMin) * newRange) / oldRange) + newMin;
}

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
