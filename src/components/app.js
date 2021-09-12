import {h, Component} from 'preact';
import Hero from "./hero/hero";
import Article from "./article/article";
import {Provider} from "redux-zero/preact"
import store from "../utils/store/store";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            languages: ['English', 'Hindi'],
        }
        // Required to map props for redux-zero state storage
        this.mapToProps = ({selectedLanguage}) => ({selectedLanguage})
    }

    render() {
        return <Provider store={store}>
            <div className="app-container">
                <div id="app">
                    <Hero />
                    <noscript>Please update your browser to be able to use the interactive content.</noscript>
                    <Article />
                </div>
            </div>
        </Provider>
    }
}
