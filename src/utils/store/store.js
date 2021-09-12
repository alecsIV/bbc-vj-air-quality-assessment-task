import createStore from "redux-zero";
import englishLangData from '../../assets/lang/english.json'
import hindiLangData from '../../assets/lang/hindi.json'
import {getCitiesData} from "../helpers";

// Set the initial states for the store (app state management)
const initialState = {
    animated: true,
    selectedLanguage: 'english',
    languageData:{
        english: englishLangData,
        hindi: hindiLangData
    },
    citiesData:{
        english:getCitiesData(englishLangData),
        hindi: getCitiesData(hindiLangData)
    }
};
export default createStore(initialState);
