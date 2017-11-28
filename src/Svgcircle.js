import React, { Component } from "react";


class Svgcircle extends Component {
    
    render() {
        return (
                <svg width="240" height="380" xmlns="http://www.w3.org/2000/svg" svg="http://www.w3.org/2000/svg">
                    <g>
                        <title>{this.props.title}</title>
                        <path id="svg_7" 
                            d="m8,43c0,-19.33702 16.1105,-35 36,-35c19.8895,0 36,15.66298 36,35c0,19.33702 -16.1105,35 -36,35c-19.8895,0 -36,-15.66298 -36,-35z" 
                            strokeLinecap="null" strokeLinejoin="null" strokeDasharray="null" strokeWidth={this.props.strokeWidth} stroke={this.props.strokeColor} fill={this.props.bodyColor} />
                    </g>
                </svg>
        )
    }
}

Svgcircle.defaultProps = {
    title:'svg circle',
    bodyColor: 'ffff00',
    strokeWidth: 8,
    strokeColor : '000'
}

export default Svgcircle;