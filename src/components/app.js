import {h, Component} from 'preact';
import {IntlProvider, Text} from 'preact-i18n'
import defaultLangDefinition from '../assets/lang/english.json'

const testDef = {
    title: "hello this is title",
    name: "henry"
}
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentLanguage: 'english',
            otherLanguage: 'hindi',
            langDefinition: defaultLangDefinition,
            citiesData: []
        }
        this.getCitiesData();
    }

    changeLanguage = () => {
        this.setState({currentLanguage: this.state.otherLanguage, otherLanguage: this.state.currentLanguage})
        // if (this.state.currentLanguage === 'english') this.setState({currentLanguage: 'hindi'});
        // else this.setState({currentLanguage: 'english'});
        // this.refreshData(language)
        // Call this function to change language
    };

    refreshData = (language) => {
        console.log(language);
        import(`../assets/lang/${language}.json`)
            .then(langDefinition => this.setState({langDefinition}));
        this.getCitiesData();
    }

    getCitiesData = () => {
        let cities = [];
        console.log(this.state.langDefinition);
        Object.keys(this.state.langDefinition).forEach((key) => {
            if (key.match(/(compare-tabs_1_city_\d*_)/g)) {
                const splitKeyArr = key.split("_");
                const cityProp = splitKeyArr[splitKeyArr.length - 1];
                const cityId = splitKeyArr[splitKeyArr.length - 2] - 1;
                if (!cities[cityId]) {
                    cities.push({});
                }
                cities[cityId][cityProp] = this.state.langDefinition[key];
            }
        });
        console.log(cities);
        this.setState({citiesData: cities});
    }

    render({}) {
        return <div className="app-container">
            <div id="app">
                <p>test</p>
                {this.state.citiesData.map(city => {
                    return <button key={city.name}>{city.name}</button>
                })}
                <button onClick={() => this.changeLanguage(this.state.currentLanguage)}>Change language</button>
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
