
import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  } from "react-simple-maps";
import Details from './Details.js';
import la from './la.js';
import asthamaData from './asthamaData.js';
import './los_Angeles.css';

const wrapperStyles = {
    width: "100%",
    maxWidth: 980,
    margin: "0 auto",
}

class LosAngeles extends Component {
    handleClick(event){        
       // console.log(event.properties.ZIPCODE); //incase one wants to know the zip code
        this.showDetail(event.properties.ZIPCODE);

    }

    showDetail(j){
        //incase one wants to know the %value in log
        //console.log(asthamaData[j]);
         
        this.props.history.push({
          pathname:"/details",
          state:{
              key:asthamaData[j]
              }

         
        })    
    }
    
    render() {
        return (
            <div className="first-page">
                <div><h1>Welcome to Los Angeles!!</h1></div>
                <div><h2>Click on the region to know about percentage of 18+ population having Asthama Condition.</h2></div>
                <div style={wrapperStyles}>
                    <ComposableMap
                        projectionConfig={{
                        scale: 205,
                        rotation: [-11,0,0],
                        }}
                        width={980}
                        height={951}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
          
                        <ZoomableGroup >
                           <Geographies geography={ la }>
                                {(geographies, projection) => geographies.map((geography, i) => (
                                     <Geography
                                        key={ i }
                                        geography={ geography }
                                        asthama = { asthamaData }
                                        projection={ projection }
                                        onClick={ this.handleClick.bind(this) } //geography.properties.ZIPCODE
                                        style={{
                                             default: {
                                                //to have different colors in different regions, I am using the the asthama values. Darker color means more people and lighter means less.
                                                 fill: "#"+((asthamaData[geography.properties.ZIP]*10)+119990),
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

export default LosAngeles