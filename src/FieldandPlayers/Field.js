import React from 'react';
import DraggablePlayer from './DraggablePlayer'
import Sub from './sub'
import './FieldandPlayer.css'


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
 
       console.log(this.props.list)
      return(
        <div className= "fieldStyle">
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