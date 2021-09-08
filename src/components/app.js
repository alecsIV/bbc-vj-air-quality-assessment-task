import {h, Component} from 'preact';
import defaultLangData from '../assets/lang/english.json'
import {getCitiesData} from "../utils/helpers";
import Hero from "./hero/hero";
import Article from "./article/article";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            currentLanguage: 'english',
            languages: ['English', 'Hindi'],
            langData: defaultLangData,
            citiesData: getCitiesData(defaultLangData)
        }
    }

    changeLanguage = (event) => {
        // Call this function to change language
        this.setState({currentLanguage: event.target.value});
        this.refreshData()
    };

    refreshData = () => {
        // Once language is changed, data needs ot be refreshed
        import(`../assets/lang/${this.state.currentLanguage}.json`)
            .then((langData) => {
                this.setState({langData})
                this.setState({citiesData: getCitiesData(langData)});
            });
    }

    render() {
        return <div className="app-container">
            <div id="app">
                <Hero langData={this.state.langData} />
                <select onChange={(event) => this.changeLanguage(event)} value={this.state.currentLanguage}>
                    {
                        this.state.languages.map(language => {
                            return <option key={language} value={language.toLowerCase()}>{language}</option>
                        })
                    }
                </select>
                <Article langData = {this.state.langData} citiesData={this.state.citiesData} />
            </div>
        </div>
    }
}
