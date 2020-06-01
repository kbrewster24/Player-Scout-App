import React from 'react';
import larrow from './icons/larrow.svg';
import del from './icons/delete.svg';




class PlayerImage extends React.Component {
    render () {
 var playerImageStyle = {
      height: "70%",
      width: "60%",
      backgroundImage: "url(" + this.props.imgUrl + ")",
      backgroundSize: "cover",
      display: "inline-block",
      verticalAlign: "top",
      margin: "5px",
     }
 return(
      <div style={playerImageStyle}>
      </div>
     );
    }
   }

class Sub extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, field ){
        this.setState({
            [field]: e.target.value
        });
    }

    handleSwitch = () => {
        this.props.addstarter(this.props.number)
    }

    handleDelete = () => {
        this.props.deleteSub(this.props.number)
    }
    
render () {
 var playerStyle = {
      backgroundColor: "#9DCEF0",
      margin: "1px",
      color: "#333",
      fontFamily: "monospace",
      fontSize: "1.3vh",
      width: "90%",
      height: "11vh",
      borderStyle: "solid",
      display: "inline-block",
      borderRadius: "7px",
      boxShadow: "0 0 5px 2px rgba(0,0,0,.35)",
      whiteSpace: "nowrap",
      textAlign: "center"
      
     };
    var btnOver = {
        width: "50%",
        height: "30%",
        padding: "4px",
        margin: "3px",
        display: "block"
    }
    var menuStyle = {
        width: "30%",
        height: "70%",
        display: "inline-block",
        verticalAlign: "top",
        marginTop: "3px"
    }
    return(
        <div style = {playerStyle} id='myBtn1'>
            <div>{this.props.children}</div>
            <div style = {menuStyle}>
                <img style = {btnOver} onClick = {this.handleDelete.bind(this)} img onMouseDown={this.handleEvent} class = "btn" src={del} alt="x" />
                <img style = {btnOver} onClick = {this.handleSwitch.bind(this)} img onMouseDown={this.handleEvent} class = "btn" src={larrow} alt="x" />
            </div>
            
            <PlayerImage imgUrl={this.props.imgUrl}/>
        </div>
        
     );
    }
   }

   export default Sub;