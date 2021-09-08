import {Component} from "preact";
import {getParasData} from "../../utils/helpers";
import CitySelector from "../city-selector/city-selector";


export default class Article extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     paras: getParasData(props.langData)
        // }
    }


    render() {
        return <div className="article">
            <div className="article__details">
                <span className="article__details--byline">{this.props.langData['article-info_1_byline']}</span>
                <span className="article__details--date">{this.props.langData['article-info_1_date']}</span>
                <span className="article__details--category"><a
                    href={this.props.langData['article-info_1_category_url']}
                    target="_blank" rel="noreferrer">{this.props.langData['article-info_1_category']}</a></span>
            </div>
            {getParasData(this.props.langData).map((par, i) => {
                if (i <= 4) { // number of paragraphs before interactive
                    return <p key={i}>{par}</p>
                }
            })}
            <CitySelector langData={this.props.langData} citiesData={this.props.citiesData}/>
            {getParasData(this.props.langData).map((par, i) => {
                if (i > 4) { // number of paragraphs after interactive
                    return <p key={i}>{par}</p>
                }
            })}
        </div>
    }
}
