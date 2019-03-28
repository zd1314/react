import React from 'react';
class Move1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    _click() {
        const me = this;
        let startTime = Date.now();
        let distance = 300, duration = 2000;
        requestAnimationFrame(function step() {
            let p = Math.min(1.0, (Date.now() - startTime) / duration);
            me.refs.moves.style.transform = 'translateX('
                + (distance * p * (2 - p)) + 'px)';
            if (p < 1.0) requestAnimationFrame(step);
        })
    }
    render() {
        return (
            <div style={{
                position: 'absolute',
                left: '10%',
                top: '50%'
            }}>
                <div ref={'moves'} style={{
                    position: 'absolute',
                    left: 10,
                    top: -30,
                    width: 40,
                    height: 40,
                    background: 'radial-gradient(circle farthest-side at right top, red, yellow 50%, blue)',
                    lineHeight: 40,
                    textAlign: 'center',
                    borderRadius: '100%'
                }
                } onClick={this._click.bind(this)} ></div >
            </div >
        )
    }

    componentDidMount() {

    }
}
export default Move1;