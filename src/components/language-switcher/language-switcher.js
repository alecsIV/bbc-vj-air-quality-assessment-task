import {Component} from "preact";
import {Connect} from "redux-zero/preact";
import actions from "../../utils/store/actions";

export default class LanguageSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ['English', 'Hindi']
        }
        // Required to map props for redux-zero state storage
        this.mapToProps = ({selectedLanguage}) => ({selectedLanguage});
    }


    render() {
        return <Connect mapToProps={this.mapToProps} actions={actions}>
            {({selectedLanguage, changeLanguage}) => (
                    <select title="Select language" className="language-switcher" onChange={(event) => changeLanguage(event.target.value)} value={selectedLanguage}>
                        {
                            this.state.languages.map(language => {
                                return <option key={language} value={language.toLowerCase()}>{language}</option>
                            })
                        }
                    </select>
            )}
        </Connect>
    }
}
