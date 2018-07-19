import React from 'react';

const src1 = 'rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov';
const src2 = 'rtsp://172.16.101.57:1111/test'
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: '' };
  }

  componentDidUpdate() {
    // let play = this.refs.play.playList.play()
  }

  click() {
    if (this.state.display) {
      this.setState({
        display: false
      })
    } else {
      this.setState({
        display: true
      })
    }
  }

  render() {
    const me = this;
    return (
      <div style={{
        display: 'flex'
      }}>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <object classID="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://download.videolan.org/pub/videolan/vlc/last/win32/axvlc.cab"
          style={{ width: 100, height: 100, display: this.state.display ? 'block' : 'none' }}>
          <param name="src" value={src2} />
          <param name="autostart" value="true" />
          <embed ref={'play'} type="application/x-vlc-plugin" pluginspage="http://www.videolan.org" width="640px" height="480px" />
        </object>
        <button onClick={me.click.bind(me)}>click</button>
      </div>
    );
  }
};

export default Page;
