import React from 'react';
import Draggable from './Draggable';
import del from './icons/delete.svg';
import arrow from './icons/arrow.svg';
import magnify from './icons/magnify.svg';
import './FieldandPlayer.css'





class PlayerImage extends React.Component {
    render () {
 var playerImageStyle = {
      height: "45%",
      width: "35%",
      minHeight: "70px",
      backgroundImage: "url(" + this.props.imgUrl + ")",
      backgroundSize: "cover",
      display: "inline-block",
      margintop: 5,
      verticalAlign: "bottom"
     }
 return(
      <div style={playerImageStyle}>
      </div>
     );
    }
   }

class Player extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleChange(e, field ){
        this.setState({
            [field]: e.target.value
        });
    }

    handleEvent(e){
        e.stopPropagation();
    }

    handleSwitch = () => {
        this.props.sub(this.props.number)
    }

    handleDelete = () => {
        this.props.DeleteStarter(this.props.number)
    }
    
render () {
    var playerStyle =  {
        padding: "3px",
        backgroundColor: this.props.color,
        color: "#333",
        fontFamily: "monospace",
        fontSize: ".9vw",
        textAlign: "center",
        width: "100%",
        height: "100%",
        boxShadow: "0 0 5px 2px rgba(0,0,0,.35)",
        borderRadius: "6px",
        minHeight: "150px"
      };

    if(this.props.subbingStarter == true)
        playerStyle = {}

     return(
     <Draggable mystyle = {playerStyle}>
        <div style={playerStyle}>
            <div className = "headerStyle">
                {this.props.children}
            </div>
            <div className = "menuStyle">
                <img onMouseDown={this.handleEvent} onClick = {this.handleDelete.bind(this)} class = "btn" src={del} alt="x" />
                <img onMouseDown={this.handleEvent} class = "btn" src={magnify} alt="info" />
                <img onMouseDown={this.handleEvent} onClick = {this.handleSwitch.bind(this)} class = "btn" src={arrow} alt="x" />
            </div>
            <PlayerImage imgUrl={this.props.imgUrl}/>
            <table className = "tableStyle">
                <tr>
                    <td>G</td>
                    <td>{this.props.goals}</td>
                </tr>
                <tr>
                    <td>A</td>
                    <td>{this.props.assists}</td>
                </tr>
                <tr>
                    <td>Mins</td>
                    <td>{this.props.starts}</td>
                </tr>
            </table>
            <textarea className = "inputStyle"
                type="textarea"
                value = {this.state.description}
                onChange={e => this.handleChange(e, "description")}
                onMouseDown={this.handleEvent}
            />
        </div>
     </Draggable>
     );
    }
   }

   export default Player;