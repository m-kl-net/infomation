import React,{useEffect,useState} from "react";
import {RenderAfterNavermapsLoaded, NaverMap} from "react-naver-maps"
import config from "./common/config.js"
import axios from "axios"
export default function App(callback) {
  const [zoom, setZoom] = useState(2);
  const [position, setPosition] = useState({lat:37.3595704,lng:127.105399})
  return(
    <div style={{height:'100vh'}}>
      <RenderAfterNavermapsLoaded
        ncpClientId={config.naverMapApi}>
          
        <NaverMap 
          mapDivId={'react-naver-map'} // default: react-naver-map
          style={{
            width: '100%',
            height:'100%'
          }}
          center={position}
          zoom={zoom}
          zoomControl={true}
          zoomControlOptions={2}
          onZoomChanged = {(e)=> {setZoom(e)}}
          onCenterChanged = {(e) => {setPosition({lat:e._lat,lng:e._lng})}}
          onMouseMove={(e)=>{console.log(e)}}
          
          />
      </RenderAfterNavermapsLoaded>
    </div>
  )
}
