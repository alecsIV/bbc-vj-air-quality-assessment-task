import {Component} from "preact";

export default class Hero extends Component {
    constructor(props) {
        super();
    }

    render(){
        return <div className="hero" style={{backgroundImage: `url(${this.props.langData.hero_1_image})`}}>
            <h1 className='hero__title'>{this.props.langData.hero_1_title}</h1>
            {/*{console.log(this.state.paras)}*/}
            {/*{this.state.paras.map((par, i) => {*/}
            {/*    return <p className='hero__par' key={i}>par</p>*/}
            {/*})}*/}
        </div>
    }
}
