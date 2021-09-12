import {Component} from "preact";
import {Connect} from "redux-zero/preact";
import actions from "../../utils/store/actions";


export default class AnimationToggle extends Component {
    constructor() {
        super();
        // Required to map props for redux-zero state storage
        this.mapToProps = ({animated}) => ({animated});
    }

    render() {
        return <Connect mapToProps={this.mapToProps} actions={actions}>
            {(({animated, toggle}) => {
                return <div className="animation-toggle">
                    <span className='animation-toggle__title'>Animation {`${animated ? 'on' : 'off'}`}</span>
                    <label className="animation-toggle__switch">
                        <input type="checkbox" checked={animated} onChange={toggle}/>
                        <span className="animation-toggle__slider"/>
                    </label>
                </div>
            })}
        </Connect>

    }
}
