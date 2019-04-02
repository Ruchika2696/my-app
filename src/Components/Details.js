//the div with className perVAl has a check for non-existing data
import React from "react";
import "./detail.css";

class Details extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className="detailDiv" >
			<div className="firstSentence"><p>Percentage of 18 and older population with Asthma conditions residing in this area is:</p> </div>
			<div className="perVal"> {this.props.location.state != undefined && this.props.location.state.key != undefined  ? this.props.location.state.key: "Sorry we do not have the data"}% </div>
			</div>
		)}
		

        
        
}

export default Details;
		
        
