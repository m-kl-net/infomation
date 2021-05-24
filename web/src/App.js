import {RenderAfterNavermapsLoaded, NaverMap} from "react-naver-maps"
import config from "./common/config.js"

export default function App(props) {


  return(
    <div>



<RenderAfterNavermapsLoaded
  ncpClientId={config.naverMapApi}
>
  <NaverMap 
    mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
    style={{
      width: '100%',
      height: '400px',
    }}
    defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
    defaultZoom={10}
  />
  </RenderAfterNavermapsLoaded>
      
    </div>
  )
}
