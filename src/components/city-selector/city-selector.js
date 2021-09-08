import {Component} from "preact";
import {createRef} from "preact/compat";

export default class CitySelector extends Component {
    constructor(props) {
        super(props);
        this.detailsRef = createRef();
    }

    displayCityInfo(city) {
        this.detailsRef.current.innerHTML = ''

        const cityName = document.createElement("span");
        const cityCigg = document.createElement("span");
        const cityAqi = document.createElement("span");

        cityName.className = 'city__details--name'
        cityName.innerHTML = city.name;
        cityName.className = 'city__details--cigg'
        cityCigg.innerHTML = `${city.cigg}*`;
        cityName.className = 'city__details--aqi'
        cityAqi.innerHTML = city.aqi;

        this.detailsRef.current.append(cityName, cityCigg, cityAqi)
    }

    render() {
        return <div>
            {
                this.props.citiesData.map(city => {
                    return <button key={city.name} onClick={() => this.displayCityInfo(city)}>{city.name}</button>
                })
            }
            <div className="city__details" ref={this.detailsRef} />
            <span>{`*${this.props.langData['compare-tabs_1_method']}`}</span>
        </div>
    }

}
