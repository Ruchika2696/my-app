
import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  } from "react-simple-maps";
import Details from './Details.js';

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
}

class WorldMap extends Component {
    handleClick(event){        
       // console.log(event.properties.ZIPCODE); //incase one wants to know the zip code
        this.showDetail(event.properties.ZIPCODE);

    }

    showDetail(j){
        // console.log(j); 
        fetch{process.env.PUBLIC_URL +'/asthamaData.json')
        .then((res) => res.json())
        .then((data) => {

        // console.log('data:', data[j]);  //incase one wants to know the %value in log
        this.props.history.push({
          pathname:"/details",
          state:{
              key:data[j]
              }

         })
        })    
    }
    
    render() {
        return (
            <div>
                <div><h1>Welcome to Los Angeles. Click on the region to know about percentage of 18+ population having Asthama Condition.</h1></div>
                <div style={wrapperStyles}>
                    <ComposableMap
                        projectionConfig={{
                        scale: 205,
                        rotation: [-11,0,0],
                        }}
                        width={980}
                        height={551}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
          
                        <ZoomableGroup center={[0,20]}>
                           <Geographies geography={ process.env.PUBLIC_URL +'/la.json" }>
                                {(geographies, projection) => geographies.map((geography, i) => (
                                     <Geography
                                        key={ i }
                                        geography={ geography }
                                        projection={ projection }
                                        onClick={ this.handleClick.bind(this) } //geography.properties.ZIPCODE
                                        style={{
                                             default: {
                                                //to have different colors in different regions, I am using the zipcodes.
                                                 fill: "#"+((geography.properties.ZIP -60000)*10),
                                                stroke: "#607D8B", //border color
                                                strokeWidth: 0.25,
                                                outline: "none",
                                                },
                                            hover: {
                                                fill: "#3341FF", //color on hover
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.75,
                                                    outline: "none",
                                                    },
                                            pressed: {
                                                    fill: "#263238", //color when clicked
                                                    stroke: "#607D8B",
                                                    strokeWidth: 0.75,
                                                    outline: "none",
                                                    }
                                        }}
                                    />
                            ))}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
        )
    }
}

export default WorldMap