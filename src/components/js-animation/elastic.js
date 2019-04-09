import React from 'react';
export default class Elastic extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div ref={'elastic'} style={{
                position: 'absolute',
                left: 150,
                top: 51,
                width: 30,
                height: 30,
                background: '#0c8',
                lineHeight: 80,
                textAlign: 'center',
                borderRadius: '50%',
                transform: 'translateY(-200)'
            }
            }></div >
        )
    }
}