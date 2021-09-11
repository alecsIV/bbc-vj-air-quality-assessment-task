import {h, Component} from 'preact';
import Hero from "./hero/hero";
import Article from "./article/article";
import AnimationToggle from "./animation-toggle/animation-toggle";
import {Provider} from "redux-zero/preact"
import store from "../utils/store/store";
import LanguageSwitcher from "./language-switcher/language-switcher";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            languages: ['English', 'Hindi'],
        }
        this.mapToProps = ({selectedLanguage}) => ({selectedLanguage})
    }

    render() {
        return <Provider store={store}>
            <div className="app-container">
                <div id="app">
                    <Hero/>
                    <Article/>
                </div>
            </div>
        </Provider>
    }
}
