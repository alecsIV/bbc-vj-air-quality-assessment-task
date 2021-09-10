import {Component} from "preact";
import GaugeSVG from '../gauge-svg/gauge-svg';
import {objectMinMax} from "../../utils/helpers";
import {Connect} from "redux-zero/preact";

export default class CitySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCity: {},
            ciggMinMax: objectMinMax(this.props.citiesData, 'cigg')
        }
        this.mapToProps = ({animated}) => ({animated});
    }

    displayCityInfo(selectedCity) {
        // Set the state for the selected city
        this.setState({selectedCity});

        // Disable currently active button
        const cityButtonActive = document.querySelector(`.active`);
        if (cityButtonActive !== null) cityButtonActive.classList.toggle('active');

        // Assign newly activated button
        const cityButton = document.querySelector(`#city-selector__button--${selectedCity.name}`);
        if (cityButton !== null) cityButton.classList.toggle('active')
    }

    getCigarettesImages(animated) {
        let images = []

        // Render cigg num of images
        for (let i = 0; i < this.state.selectedCity.cigg; i++) {
            images.push(<img
                className={`city-selector__details__cigg--image ${(animated) ? 'delay-display' : 'no-animation'}`}
                src="../../assets/img/ciggrette_icon.png"
                alt="Cigarette" style={{animationDelay: `${0.5 * i}s`}} />);

        }
        return images;
    }


    render() {
        return <Connect mapToProps={this.mapToProps}>
            {({animated}) => (
                <div className='city-selector'>
                    <div className="city-selector__options">
                        {
                            this.props.citiesData.map(city => {
                                return <button
                                    className='city-selector__button' id={`city-selector__button--${city.name}`}
                                    key={city.name}
                                    onClick={() => this.displayCityInfo(city)}>{city.name}</button>
                            })
                        }
                    </div>
                    <div
                        className={`city-selector__details ${(Object.keys(this.state.selectedCity).length > 1) ? '' : 'collapsed'}`}
                        ref={this.detailsRef}>
                        <h1 className='city-selector__details--name'>{this.state.selectedCity.name}</h1>
                        <div className="city-selector__details__cigg">
                            <p className='city-selector__details__cigg--text'>{this.state.selectedCity.cigg}*</p>
                            <div className="city-selector__details__cigg--image-container">
                                {this.getCigarettesImages(animated)}
                            </div>
                        </div>
                        <p className='city-selector__details--aqi'>{this.state.selectedCity.aqi}</p>
                        <span
                            className='city-selector__footnote'>{`*${this.props.langData['compare-tabs_1_method']}`}</span>
                        <GaugeSVG
                            animated={animated}
                            ciggMinMax={this.state.ciggMinMax}
                            currentCiggNum={this.state.selectedCity.cigg}/>
                    </div>
                </div>
            )}
        </Connect>
    }

}
