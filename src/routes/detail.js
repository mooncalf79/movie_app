import React from "react";



class detail extends React.Component{
    componentDidMount(){
        const{location,history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }

    rander(){
        const {location} = this.props;
        if(location.state){
            return <span> {location.state.title}</span>;
        } else {
            return null;
        }

        
    }
}
export default detail;