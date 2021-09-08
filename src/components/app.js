import {h, Component} from 'preact';
import {IntlProvider, Text} from 'preact-i18n'
import defaultLangData from '../assets/lang/english.json'

const testDef = {
    title: "hello this is title",
    name: "henry"
}
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentLanguage: 'english',
            languages: ['English', 'Hindi'],
            langData: defaultLangData,
            citiesData: []
        }
        this.getCitiesData();
    }

    changeLanguage = (event) => {
        // Call this function to change language
        this.setState({currentLanguage: event.target.value});
        this.refreshData()
    };

    refreshData = () => {
        console.log(this.state.currentLanguage);
        // Once language is changed, data needs ot be refreshed
        import(`../assets/lang/${this.state.currentLanguage}.json`)
            .then((langData) => {
                this.setState({langData})
                this.getCitiesData();
            });
    }

    getCitiesData = () => {
        let cities = [];
        console.log(this.state.langData);
        Object.keys(this.state.langData).forEach((key) => {
            if (key.match(/(compare-tabs_1_city_\d*_)/g)) {
                const splitKeyArr = key.split("_");
                const cityProp = splitKeyArr[splitKeyArr.length - 1];
                const cityId = splitKeyArr[splitKeyArr.length - 2] - 1;
                if (!cities[cityId]) {
                    cities.push({});
                }
                cities[cityId][cityProp] = this.state.langData[key];
            }
        });
        console.log(cities);
        this.setState({citiesData: cities});
    }

    render({}) {
        return <div className="app-container">
            <div id="app">
                <p>test</p>
                {
                    this.state.citiesData.map(city => {
                        return <button key={city.name}>{city.name}</button>
                    })
                }
                <select onChange={(event) => this.changeLanguage(event)} value={this.state.currentLanguage}>
                    {
                        this.state.languages.map(language => {
                            return <option key={language} value={language.toLowerCase()}>{language}</option>
                        })
                    }
                </select>
            </div>
        </div>;
    }
}

// const App = () => (
//     <IntlProvider definition={defaultDefinition}>
//         <div id="app">
//             <p>test</p>
//             <h1><Text id="hero_1_title"/></h1>
//             {/*{this.getCitiesData().map(city => {*/}
//             {/*    return (<button key={city.name}>{city.name}</button>)*/}
//             {/*})}*/}
//         </div>
//     </IntlProvider>
// )
//
// module.exports = App
