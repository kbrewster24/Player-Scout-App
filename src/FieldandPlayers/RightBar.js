import React from 'react';
import Sub from './sub';


class RightBar extends React.Component {

    sub = (e) => {
        this.props.AddStarterRemoveSub(e)
    }

    delete = (e) => {
        this.props.DeleteSub(e)
    }

    render () {
 var barStyle = {
    margin: "5px",
      backgroundColor: "#333",
      display: "inline-block",
      position: "absolute",
      fontFamily: "monospace",
      textAlign: "center",
      fontSize: "20px",
      width: "11%",
      minHeight: "0px"

      
     };
     return(
      <div style={barStyle}>
          <Sub addstarter = {this.Alpha}></Sub>
        {this.props.list.map(function(item){
            return <Sub imgUrl = {item.imgUrl} 
                number = {item.number}
                addstarter = {this.sub.bind(this)}
                deleteSub = {this.delete.bind(this)}>
                {item.lname + " " + item.number}</Sub>
          }, this)}
      </div>
     );
    }
   }

   export default RightBar;