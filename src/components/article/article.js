import {Component} from "preact";
import {getParasData} from "../../utils/helpers";
import CitySelector from "../city-selector/city-selector";
import {Connect} from "redux-zero/preact";
import AnimationToggle from "../animation-toggle/animation-toggle";
import LanguageSwitcher from "../language-switcher/language-switcher";


export default class Article extends Component {
    constructor(props) {
        super(props);
        this.mapToProps = ({languageData, selectedLanguage, citiesData}) => ({
            languageData,
            selectedLanguage,
            citiesData
        })
    }


    render() {
        return <Connect mapToProps={this.mapToProps}>
            {({languageData, selectedLanguage, citiesData}) => (
                <section className="article">
                    <div className="article__details__container">
                        <div className="article__details">
                            <span
                                className="article__details--byline">{languageData[selectedLanguage]['article-info_1_byline']}</span>
                            <span
                                className="article__details--date">{languageData[selectedLanguage]['article-info_1_date']}</span>
                            <span className="article__details--category"><a
                                href={languageData[selectedLanguage]['article-info_1_category_url']}
                                target="_blank"
                                rel="noreferrer">{languageData[selectedLanguage]['article-info_1_category']}</a></span>
                        </div>
                        <LanguageSwitcher/>
                    </div>
                    <div className="article__content">
                        <div className="article__section">
                            {getParasData(languageData[selectedLanguage]).map((par, i) => {
                                if (i <= 4) { // number of paragraphs before interactive
                                    return <p key={i}>{par}</p>
                                }
                            })}
                        </div>
                        <AnimationToggle/>
                        <CitySelector
                            citiesData={citiesData[selectedLanguage]} languageData={languageData[selectedLanguage]}/>
                        <div className="article__section">
                            {getParasData(languageData[selectedLanguage]).map((par, i) => {
                                if (i > 4) { // number of paragraphs after interactive
                                    return <p key={i}>{par}</p>
                                }
                            })}
                        </div>
                    </div>
                </section>
            )}
        </Connect>
    }
}
