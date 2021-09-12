import {Component} from 'preact';
import {normaliseVal} from "../../utils/helpers";


export default class GaugeSvg extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // Calculate arrow degree after component has been rendered
        this.calculateArrowAngle();
    }


    calculateArrowAngle() {
        // Define SVG-specific min and max values
        const maxTick = 80; // the max degree of the gauge arc
        const minTick = -80; // the min degree of the gauge arc

        // Calculate arrow rotation degree
        // Calculates the arrow rotation degree by normalising the current cig num between the maximum arc range
        const rotationDegree = normaliseVal(parseInt(this.props.currentCiggNum, 0), this.props.ciggMinMax.min, this.props.ciggMinMax.max, minTick, maxTick);

        // Rotate arrow
        const arrowElement = document.querySelector('svg#svgMain #svgGroup #gauge #arrow')
        if (arrowElement !== null) {
            arrowElement.setAttribute('style', `transform: rotate(${rotationDegree}deg);
              transition: ${(this.props.animated) ? 'all 0.5s' : 'none'};`);
        }
    }

    render() {
        return <div className="gauge-svg__container">
            <svg viewBox='0 0 382 261' width="100%" height="261" id="svgMain" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill="#E5E5E5" d="M0 0h382v261H0z"/>
                <g id="svgGroup">
                    <path transform="translate(-59 -120)" fill="#FAFAFA" d="M0 0h500v500H0z"/>
                    <g id="gauge">
                        <path
                            id="Polygon 2"
                            d="m66.8 85.5 125.2 124L1.7 186.3l6.8-20 9-19 2.5-6 3.5-6 7-10.5L44 107.3l10.5-11 12.3-10.8Z"
                            fill="#51B555"/>
                        <path
                            id="Polygon 3"
                            d="M191.5 41.3V209L66.5 85l7.5-4.7 14.5-10 20-10.5 4.8-3.2 6.7-1.8 12.5-5 21.5-5 23-3 14.5-.5Z"
                            fill="#AECB5B"/>
                        <path
                            id="Polygon 4"
                            d="m316.2 85.5-125.7 124L381 186.1l-6.8-19.8-9-18.7-2.4-6-3.5-5.9-7-10.4-13.4-17.2-22.7-22.6Z"
                            fill="#D36B30"/>
                        <path
                            id="Polygon 5"
                            d="M191.3 41.3v168.2L316 85.5l-20.9-15L275.3 60l-4.8-3.2-6.7-1.7-12.4-5-21.4-5-19.2-3.3-19.5-.5Z"
                            fill="#E7EB44"/>
                        <g id="outlines-group" stroke="#000">
                            <path
                                id="gauge-outline"
                                d="M380.5 185.7a196.2 196.2 0 0 0-378.5 0m-1 .6a16.3 16.3 0 0 1 .2-.8 197 197 0 0 1 380.3.8"/>
                            <g id="ticks" stroke-width="2">
                                <path id="base-ticks" d="m381 185.3-27.5 4.5M1 185.3l26 4.5"/>
                                <path id="tick-low" d="M66.7 85.3 78 96.6"/>
                                <path id="tick-middle" d="M191.5 41.3v16.3"/>
                                <path id="tick-high" d="m316.5 85-11 11"/>
                            </g>
                        </g>
                        <g id="arrow" fill="#4E4E4E">
                            <circle id="arrow-circle" cx="191.6" cy="205.3" r="19.3"/>
                            <path id="arrow-head" d="m191.2 58.4 15 151.9h-30l15-151.9Z"/>
                        </g>
                    </g>
                </g>
            </svg>
            <span className="gauge-svg__explainer">Representation of the level of cigarettes smoked compared to the other listed cities</span>
        </div>
    }
}
