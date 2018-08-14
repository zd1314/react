import React, { Component } from 'react';
import echarts from 'echarts';
import bg from './bg.png';
import chinaJson from './china.geo.json';

class ChinaMap extends Component {
  constructor(props) {
    super(props);
    let me = this;
    this.state = {};
    me._option = {
      title: {
        text: me.title,
        textStyle: {
          color: '#ffffff',
          fontSize: 16
        },
        left: 'center',
        top: '4%'
      },
      tooltip: {
        trigger: 'item',
        backgroundColor: 'transparent',
        axisPointer: {
          lineStyle: {
            color: '#000000'
          }
        }
        // formatter:'当前：{c}'
      },
      geo: [],
      series: []
    };

    let flag = false;
    let n = 3;
    let color = '';
    let _opacity = 0;
    for (let i = 2; i > -1; i--) {
      if (i == 2) {
        // color = "rgba(203,220,235,0.12)";
        color = 'red'
        _opacity = 1;
      } else if (i == 1) {
        color = "rgba(203,220,235,0.11)";
        _opacity = 0.8;
      } else if (i == 0) {
        _opacity = 0.6;
        color = "rgba(203,220,235,0.10)";
      }
      flag = (i === (n - 1));
      me._option.geo.push({
        map: 'china',
        roam: false,
        top: 9 - (i / (n - 1)) * 4.5 + '%',
        left: 4 + (i / (n - 1)) * 0 + '%',
        width: 600,
        height: 360,
        // tooltip: { show: true },
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          normal: {
            color: color,
            borderColor: 'rgba(255,255,255,0.' + (i + i + 3) + ')',
            borderWidth: i === 2 ? 1 : 0,
            opacity: _opacity
          },
          emphasis: {
            areaColor: color
          }
        },
        silent: !flag
      })
    }
  }

  render() {
    let me = this;
    return (
      <div ref="map" style={{ width: me.props.width, height: me.props.height, position: 'absolute', left: 40, top: 100 }}></div>
    )
  }
  _setData(d) {
    let me = this;
    this.setState({
      data: d
    });
  }
  componentDidMount() {
    let me = this;
    me._option.tooltip.formatter = function (params) {
      //console.log(params);
      let res = '<div style="width:50px;height:56px;font-size:16px;color:#fff;line-height:24px;text-align:center;background-size:100% 100%;background: url(' + bg + ')"><p style="height: 28px;line-height: 28px;">' + params.data.name + '</p><p style="font-size:20px;height:24px;">' + params.data.value[2] + '</p></div>'
      return res
    }
  }

  componentDidUpdate() {
    let me = this;
    me.data = [];
    let geoCoordMap = {};
    let dataFrom = "重庆";
    me.myChart = echarts.init(me.refs.map);
    me.myChart.showLoading();
    me.myChart.hideLoading();
    echarts.registerMap('china', chinaJson);
    chinaJson.features.forEach(function (v) {
      var name = v.properties.name;
      geoCoordMap[name] = v.properties.cp;
      me.data.push({
        name: name,
        value: Math.round(Math.random() * 100 + 10)
      })
    })
    me.convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value),
          });
        }
      }
      //console.log(res);
      return res;
    };
    me._option.series.push(
      {
        name: '重庆',
        type: 'lines',
        zlevel: 2,
        symbolSize: 10,
        lineStyle: {
          normal: {
            color: '#fff',
            width: 2,
            opacity: 0.5,
            curveness: 0.2
          }
        },
        data: me.state.data.lineData.map(function (dataItem) {
          return {
            fromName: dataFrom,
            toName: dataItem.name,
            coords: [
              geoCoordMap[dataFrom],
              geoCoordMap[dataItem.name]
            ]
          }
        })
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: me.convertData(me.state.data.markeData.sort(function (a, b) {
          return b.value - a.value;
        }).slice(0, 8)),
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA5CAYAAABnLziGAAAK20lEQVRogcXba7BeV1kH8N95c2vCSZOmp0nBQpo2DWlsSwuYyqWWAi2i4rXgODpaHW9j0dFBxEs/6Ae8AEWwjANFnfEygFZRUHEql8SWgi0UY21rm5aUXEpTSEsSQtKcXI4f/mv33Wefvfd5z2nA/8yelbMv613PWs/l/zxrZWzqvrf6JmAxzsYEVmE5noWF5dlJHMNRHMLXsa9cXy3PTykWnsK+xnFeuc7CWM+7Aywp1+nl3vNLO4lHsQM7cfxUDO5UCHoOLsJzDYU7icfL9QQO4huyipMi6CKcJhO0QiZnDVZiXbkmsR33yMrPG89E0GdjcxkcmfndeLi0fStxUtT2KA7IClZYjrXYIKp/ETbhIXwOh+cz2LF52OhSvBTnl7+P4D7cj6fmM4geTOAFYg5johFfwP+Yox3PVdC1eIXY1jH8F+51iuyoB2fgO8U84CvYItowEkYVdAzfgUvL37twu9jdtxJrcQWWif1uEYc1K0ax0QW4StTnBP5TVPX/Azuxt4zneXgNPiuq3IvBLM8Xls7OE/v7V89cyEUj/G4fjuJWsVV4CV4020d9KzqGV0n4OIx/wf45DGgxLsS5MlFnC2lYVJ4fFqLwFfHUD+FLojWzYQqfL328TAQ9jv/u+qBP0MvFJibxMaMLuU5U6zIRtoljZaDLyrUGF5dn38Bd+JRMwGy4X7zvd5XxHsIX217sEnQ9LimdfAxPjvCj5+CH8e3l7ylhNw/ISu0uA5ms/fYqPEdC1cUSm6/ClbgD/2h2h/eAEI/N5bv9QlKmoc3rjuNaWY07zG6TA3wvXiuO67B45P9o+8FZcIGEr8tKX4fw4TKO2fBKWaD9+AcNE2hb0StEyEfMLuRS/Kywl5PYio+YJ3sRO31I7PnHhR39JDbir0Ttu3Cb0MiVeDHurD9ser9zJShPmn0Wz8BbRMiv4Z34oPkLWcfe0t9fipfdjF+Vie3CcdGiKTGDlfWH9RUdKx0y9GhdWIpfFpvahZuEuLdhgxCNC7G6fHtA7P5+YVc7Wr6bwmdK/78iavlGvNvQzpvYKzZ7oTinW6sHdUHXySwcLAPowgL8Ir4Ne2Tmj7S884Oifs/r6esHSrsDH8A/mxle9uBt+HUR9qfw/p4+7y7vrRWuvI/pgl5S2m36CfPVYjP78S4zhXwhflNiJ3FIdwgn/rJoykoJKy+QgH8ebsDr8Qfl3Tr2ida8RezvQbHJNhzG/xZ5LsUn6oKuErV6SoJ3F87C94la/ZkE/DregDfJiu7Ae8VBdU3cLeL4rsHPS/L95/hjfKjx7qP4a3F+18pkdIW9e8V3nCumcqRyRheU9ov6M5EfFWZzm3jHOq7Db4it34wfk8A/Wzo1KazrDeLMFoia/nTLu58Tm15iqPZtOCRxe6BoViXo2tK2soraOxfLqn+k8ewaXC+T9Dsi6ChUro6ncCN+Xybn+tJvE7eU37lctLALlWaeTwRdLjZzVEofXbiytLeZzlZWiU2O4Y/w8Z4+RsGHRXXht80U5gmhiWO1MbVht5jYaiwe1Dp6rDxow0IhzlNmOoE3SoHrU0LZ2rAEP2IYG9+B1+mmoB+U0DIuK9vE1tJerjsTmhQbHuDsgTgY+kn0BcInd0s5ssKEUL8T4oHbcLUUuP4evyZM5034qHjHKzq+e5swoe8WplTHTtG+5RIWu1Bp6MRAKnD0ZycbSvtA4/73iHP6pISOJr4f/6Y7lq4X9/+almd7yrMF5XeaqELQ81ueVagEPbOyUfrLic+p/XgdLyvtJ1q+WSNquqCnXxJe/kZsvYnK3l/e8qwqofQRkmrxxgeiksQZdeHM0j7WuF/N5raWb35Bg2/2YAI/13J/m/iFjWba4t7at12onOb4wNAhdPFHUhlgOgtaLM7isPbA/eqe/trQpr4HS9+LDSe7QlUBXK4bT+e+A0PV6kuBFra8U61Wkx1VWNNxvwvP7rhfqd/pjfuVBi7p6bMiP4sGhoG9r6xyrOWdqljdHECFUaoSdXQ5w/HSNjl1ZXJ9mlhtkZwY1F5sq+9UqBxVXaiDorZLJTdtYktPf234dMu9SmVPKllIDZU59aWTlUwnBmoG2/NBFWOb8axy8ZeYifcbfYviqCQATWwULdpp5spVRKevXFOt+uGB9tVqYldpm8H586V9Zcs3jwhBGAU3aOfZV5X2zpZnVVjZ3dNvJdOhgeGMNL1aHdtLu8n0fc9bRa2u0U6w3ythpitGH5HqwTtani2T5J0k5E1sKm1fIlI5zAMDQ93v85I7xVlMiDpVeFRscZGUVtpwszCrG4QA3C1M6nclDt/U8d3PSOi4WxLtOs6UFT1mJluro5r8rw4k8J4QztvlkKYkYyDF4jpuEht7rVC+NjyGt8rKv1hi7O/pVrvLhBOfxHtanl8pmrVNf1isQtbjA4k1j5cP++jUlvLDl5q++nsMCf1vGdLC+WKDqPJASpzNDaSlhonA1p5+JkT9Dyqqy1DP1/d8+KTsXA2klFHHLfg7UeEbpRLRd4ahC68WVV8hpcs/bXnndSLAdv1ln2qjehdD/rhDVusc/ZTqoxIyLpGN2TreLnWkBXgz3icqOArWyir+oYS5f5dkvlmGqfZ1TsrkdmFgWB7azpDpHJXZ2SDlks90dLBf8sqfkFLmHsOMZkq87INSrXuhxNLtomLbxB/sL8Ksln2aK8q7Awn+7ylCNIsAy4X4D8pE7NKN9bLqT2gpd95bBN0o229dmzu3y2xdLp72RtOT9i3iuK4TFd9gmM924ajsvd5sJgMiTvJ68baPmFmzqmPMcGf+nqdvNjaZrhb1eFBspAuLRcgNYux/ot2DLpGDHZvLu2dIbDskNv9AGcztupODcSnXrJNJeLv+IsGFoiVfx98q6t8UdIUUkQcSpJv5Zx1L8UtFgEmptH+25/35YJ3UcSdEDd+pfcUrnCZl09OkGPD0VkczmT1guGt8peHudBuOyEreKSt8nahXXwlyVCwVtX+zCPklcVR9QpKq/2myQNP2c9pSsy+IF1wlwraVSSocw19IMfta8cabxEa3GvHESA0rRe1eISp7UtjUP5n9iM968R3HtJhd1/GbM/BDMhF3aS+VNLFCqucvNYyhj0nAf1i8837T899xCWnrhA6ur31bVQ5HmazVslWyUIRsUsbec0bnGZZDbpfS5ChYLdnMZsOcsY4jhocemzgmprPVzC2PLpwuJOJZ4txaN59mO1BVEYMp2RHr205sYqGs0EZZsbPLoCq/cFzi5j6Jidtlh30ux+xWSil0XLx+lU21DqYP94hDepGUHJdJNtFV0a/juMxwM7tYanjo8ZlgjRS3l4iJfFzPhtYoJ8fuLoN6iTCYCSEF8x1os/YzH2wq41kgNvxJszirUU9w3SszNikZzutl7/FbjWWS6r1chLxP6OCshy7nerpzhZDqKlbulrOBX5tLJ/PAQPzFZWJKk1JM68tepmGuB5MPCM+8WOz2uRIedoi3nC2gzxWLRU0vktUk5OHT5nj6ZT4nsKfEST0sR1svkNzvfBF0u9hNF3edDQtk8s4X4lKxs30S05v7PyNhPiewmxgXtdpgeilmv6Rl+8q/DxkeLycCLZGVOl0ykzViFvUF+LKQjrmyrGk4Ff954JDkr3cZnuQ8R2LcqJtMdUzJ5OwoV9f5pTnhVP53kOOizg+L8zirXGfKii0XNawY0QlxKtVx1idFwL1O/dl8/weYU6MWzRAgzwAAAABJRU5ErkJggg==',
        symbolSize: [18, 18],
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: function (params) {
              return params.name
            },
            position: 'right',
            show: true,
            color: '#fff',
            fontSize: 16
          }
        },
        itemStyle: {
          normal: {
            color: '#ffd585',
            shadowBlur: 1,
            shadowColor: '#ffd585'
          }
        },
        zlevel: 1
      }
    )
    // me.option = {
    //   geo: {
    //     show: true,
    //     map: 'china',
    //     roam: true,
    //     itemStyle: {
    //       normal: {
    //         color:'rgba(255,255,255,.1)',
    //         borderColor: '#cbdceb',
    //         borderWidth: 1.5,
    //         label: {
    //             show: true,
    //             color: '#fff',
    //         },
    //         emphasis: {
    //             label: {
    //                 show: true
    //             }
    //         }
    //       }
    //     }
    //   },
    //   series:[
    //     {
    //       type: 'map',
    //       map: 'china',
    //       geoIndex: 0,
    //       aspectScale: 0.75, //长宽比
    //       roam: true,
    //       animation: false,
    //       // data: data
    //     },
    //   ]
    // }
    me.myChart.setOption(me._option);
  }
}

export default ChinaMap;
