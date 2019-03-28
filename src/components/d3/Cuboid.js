import React from 'react';
import * as  d3 from 'd3';
class Svg {

}
class Cuboid extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div ref='domRef'></div>
        )
    }
    componentDidMount() {
        const me = this;
        let width = this.width;
        let height = this.height;
        let svg = d3.select(me.refs.domRef).append('svg').attr('width')


    }
}
export default Cuboid;



// var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
//     '7a', '8a', '9a', '10a', '11a',
//     '12p', '1p', '2p', '3p', '4p', '5p',
//     '6p', '7p', '8p', '9p', '10p', '11p'];
// var days = ['Saturday', 'Friday', 'Thursday',
//     'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

// var data = [
//     [0, 2, 1],
//     [0, 8, 2],
//     [0, 13, 5],
//     [0, 16, 3],
//     [0, 18, 4],
//     [3, 20, 1],
//     [2, 22, 1],

// ];
// option = {
//     tooltip: {},
//     visualMap: {
//         max: 20,
//         inRange: {
//             color: ['#313695', 'red']
//         }
//     },
//     xAxis3D: {
//         type: 'category',
//         data: hours,
//         splitLine: {
//             lineStyle: {
//                 color: 'red'
//             }
//         }
//     },
//     yAxis3D: {
//         type: 'category',
//         data: days,
//         splitLine: {
//             lineStyle: {
//                 color: 'red'
//             }
//         }
//     },
//     zAxis3D: {
//         type: 'value',
//         splitLine: {
//             lineStyle: {
//                 color: 'red'
//             }
//         }
//     },
//     grid3D: {
//         boxWidth: 200,
//         boxDepth: 80,
//         viewControl: {
//             // projection: 'orthographic'
//         },
//         light: {
//             main: {
//                 intensity: 1.2,
//                 shadow: true
//             },
//             ambient: {
//                 intensity: 0.3
//             }
//         }
//     },
//     series: [{
//         type: 'bar3D',
//         data: data.map(function (item) {
//             return {
//                 value: [item[1], item[0], item[2]],
//             }
//         }),
//         shading: 'lambert',

//         label: {
//             textStyle: {
//                 fontSize: 16,
//                 borderWidth: 1
//             }
//         },

//         emphasis: {
//             label: {
//                 textStyle: {
//                     fontSize: 20,
//                     color: 'yellow'
//                 }
//             },
//             itemStyle: {
//                 color: 'yellow'
//             }
//         }
//     }]
// // 