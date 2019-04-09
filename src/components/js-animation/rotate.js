import React from 'react';
class Move1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    _click() {
        const me = this;
        let startTime = Date.now();
        let r = 80, duration = 2000;
        requestAnimationFrame(function step() {
            let p = Math.min(1.0, (Date.now() - startTime) / duration);
            let rotation = 360 * p;
            /*旋转 */
            me.refs.moves.style.transformOrigin = '0 ' + r + 'px';
            me.refs.moves.style.transform = 'rotate(' + rotation + 'deg)'
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
                    left: 60,
                    top: -40,
                    width: 30,
                    height: 30,
                    background: 'radial-gradient(circle farthest-side at right top,yellow, green 50%, red)',
                    textAlign: 'center',
                    borderRadius: '100%',
                    color: '#fff',
                    lineHeight: 3
                }
                } onClick={this._click.bind(this)} >旋转</div >
            </div >
        )
    }

    componentDidMount() {


    }
}
export default Move1;