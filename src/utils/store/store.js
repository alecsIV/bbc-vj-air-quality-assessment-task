import createStore from "redux-zero";
import englishLangData from '../../assets/lang/english.json'
import hindiLangData from '../../assets/lang/hindi.json'
import {getCitiesData} from "../helpers";

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
console.log(initialState);
export default createStore(initialState);
