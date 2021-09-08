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
    return  cities;
}

function getParasData(data) {
    let paras = [];

    Object.keys(data).forEach((key) => {
                if (key.match(/(p_\d*_value)/g)) {
                    paras.push(data[key])
                }
    });
    return  paras;
}

export {getCitiesData, getParasData};
