// import Cesium from "cesium/Cesium";

import React from 'react';
class Cesiums extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref='cseium'></div>
        )
    }
    componentDidMount() {
        const me = this;
        // console.log(Cesium)
    }
}
export default Cesiums;