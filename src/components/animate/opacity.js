import React from 'react';
class Opacity extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div id="main" className="main">
                    <div className="waterdrop tomato"></div>
                    <div className="waterdrop aqua"></div>
                    <div className="waterdrop gold"></div>
                    <div className="waterdrop lightgreen"></div>
                    <div className="waterdrop green"></div>
                </div>

            </div>
        )
    }
    componentDidMount() {

    }

}
export default Opacity;