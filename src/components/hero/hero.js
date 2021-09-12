import {Component} from "preact";
import {Connect} from "redux-zero/preact";

export default class Hero extends Component {
    constructor() {
        super();
        // Required to map props for redux-zero state storage
        this.mapToProps = ({languageData, selectedLanguage}) => ({languageData, selectedLanguage})
    }

    render() {
        return <Connect mapToProps={this.mapToProps}>
            {({languageData, selectedLanguage}) => (
                <section
                    className="hero" style={{backgroundImage: `url(${languageData[selectedLanguage].hero_1_image})`}}>
                    <div className="hero__title__container">
                        <h1 className='hero__title'>{languageData[selectedLanguage].hero_1_title}</h1>
                    </div>
                </section>
            )}
        </Connect>
    }
}
