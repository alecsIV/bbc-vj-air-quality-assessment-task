import {Component} from "preact";
import {Connect} from "redux-zero/preact";

export default class Hero extends Component {
    constructor(props) {
        super();
        this.mapToProps = ({languageData, selectedLanguage}) => ({languageData, selectedLanguage})
    }

    render() {
        return <Connect mapToProps={this.mapToProps}>
            {({languageData,selectedLanguage}) => (
                <section className="hero" style={{backgroundImage: `url(${languageData[selectedLanguage].hero_1_image})`}}>
                    <div className="hero__title__container">
                        <h1 className='hero__title'>{languageData[selectedLanguage].hero_1_title}</h1>
                    </div>
                    {/*{console.log(this.state.paras)}*/}
                    {/*{this.state.paras.map((par, i) => {*/}
                    {/*    return <p className='hero__par' key={i}>par</p>*/}
                    {/*})}*/}
                </section>
            )}
        </Connect>
    }
}
