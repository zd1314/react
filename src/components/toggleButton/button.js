import React from 'react';
/*tab切换
 * @parmas data:切换的名字
 *
 */
class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{ name: '列表A', type: 0 }, { name: '列表B', type: 1 }],
            type: 0
        }
    }
    click(item, i) {
        this.setState({
            type: i
        })
        this.props.clicks(item)
    }
    render() {
        let type = this.state.type;
        return (
            <div className={'tab-wrap'} style={{
                display: 'flex',
                color: 'black',
                fontSize: 20,
                marginTop: 20
            }}>
                {
                    this.state.data.map((s, i) => {
                        return <div style={{
                            marginRight: 100,
                            background: type == i ? "blue" : 'red',
                            color: type == i ? "#fff" : 'black'
                        }} key={i} onClick={this.click.bind(this, s, i)}>
                            {s.name}
                        </div>
                    })
                }
            </div>
        )
    }
}
export default ToggleButton;