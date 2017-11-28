
import React, { Component } from "react";
import { render } from 'react-dom';
import { divIcon } from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const catagoryClassname = {
  TRAFFIC: 'my-div-icon',
  POLICE: 'my-div-icon2',
  RAILWAY: 'my-div-icon3',
  WBSEDCL: 'my-div-icon4',
}

class Mapview extends Component {
  constructor(props) {
      super()
      this.state = {
        zoom: 5,
      };
      // setTimeout(()=> {
      //   const revt = new Event('resize')
      //   window.dispatchEvent(revt)
      // }, 3000)
  }
  render(){
    var positionData=[];
    var centerPosition=[]
    var dataArr=[];

    for(var i=0;i<100;i++){//data create for map pointer
      var rand= (Math.random()*5)+22.30;
      var rand2= (Math.random()*5)+86.30
      var c=Math.round(Math.random()*10)
      
      if(c<4){
        dataArr.push({lat: rand,lng: rand2,category:'WBSEDCL',status:'ASSIGNED',location:'WB,kolkata',date:'12/11/2017',categoryId:1})
      }else if(c<6 && c>3){
        dataArr.push({lat: rand,lng: rand2,category:'POLICE',status:'WORK IN PROGRESS',location:'WB,kolkata',date:'12/11/2017',categoryId:2})
      }else if(c<8 && c>5){
        dataArr.push({lat: rand,lng: rand2,category:'TRAFFIC',status:'DONE',location:'WB,kolkata',date:'12/11/2017',categoryId:3})
      }else if(c<10 && c>7){
        dataArr.push({lat: rand,lng: rand2,category:'RAILWAY',status:'REJECTED',location:'WB,kolkata',date:'12/11/2017',categoryId:4})
      }
    }    

    const marker =dataArr.map((obj,ind)=>{
      if(ind == 0){
        centerPosition=[obj.lat,obj.lng]
      }  
            
      let icon = divIcon({ className: catagoryClassname[obj.category]})
      
      positionData=[obj.lat,obj.lng]
      return  <Marker position={positionData} icon={icon} key={ind}>
                  <Popup>
                    <span><a href='#' style={{textDecoration: 'none'}}>Category:{obj.category}  <br/> Date:{obj.date} <br/>Location:{obj.location} <br/>Status:{obj.status}</a></span>
                  </Popup>
              </Marker>
    })
    return (        
      <Map center={centerPosition} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {marker}
      </Map>
     
    )
  }
}
export default Mapview;