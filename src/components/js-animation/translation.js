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
            /**偏移 */
            me.refs.moves.style.transform = 'translateX('
                + distance * p * (2 - p) + 'px)';
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
                    top: -40,
                    width: 30,
                    height: 30,
                    background: 'radial-gradient(circle farthest-side at right top, red,black 50%, blue)',
                    textAlign: 'center',
                    borderRadius: '100%',
                    color: '#fff',

                    lineHeight: 3
                }
                } onClick={this._click.bind(this)} >平移</div >
            </div >
        )
    }

    componentDidMount() {


    }
}
export default Move1;