import React from 'react';
import DraggablePlayer from './DraggablePlayer'
import Sub from './sub'


class Field extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.state.users = this.props.list
  }

  sub = (e) => {
    this.props.AddSubRemoveStarter(e)
  }

  delete = (e) => {
    this.props.DeleteStarter(e)
  }
  
  
  render () {
 var fieldStyle = {
      margin: "5px",
      backgroundColor: "#21CC37",
      color: "#333",
      fontFamily: "monospace",
      fontSize: "20px",
      width: "85%",
      height: "95vh",
      display: "inline-block",
      backgroundImage: "url(https://st2.depositphotos.com/2021995/9203/v/950/depositphotos_92034148-stock-illustration-realistic-vertical-football-soccer-field.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "1100px",
      minWidth: "800px"
     };
       console.log(this.props.list)
      return(
        <div style={fieldStyle}>
          {this.props.list.map(function(item){
            return <DraggablePlayer bgColor="#9DCEF0" goals = {item.goals}
             starts = {item.gsgp} assists = {item.assists}
             imgUrl = {item.imgUrl}
             number = {item.number}
             sub = {this.sub.bind(this)}
             DeleteStarter = {this.delete.bind(this)}>
             {item.name + " " + item.number}</DraggablePlayer>
          }, this)}
        </div>
       );
    }
   }

   export default Field;