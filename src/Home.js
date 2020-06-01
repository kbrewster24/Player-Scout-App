import React from 'react';



class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      createNew: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.setState(state => ({
      createNew: true
    }))

    console.log( this.state.createNew )
  }
    render () {
    var button = {
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      marginTop: "4px",
      fontSize: "20px",
      width: "100%",
      position: "relative",
      textAlign: "center",
      backgroundColor: "lightblue",
      height: "40px",
      cursor: "pointer"
      
      
     };

     var div = {
       color: "#333",
       fontFamily: "monospace",
       marginTop: "4px",
       fontSize: "20px",
       width: "100%",
       textAlign:"center",
       backgroundColor:"lightblue",
       height: "40px"

     }
     if(!this.state.createNew)
      return(
        <div>
          <div style={button} onClick={this.handleClick}>Create new Scout</div>
        </div>
      );
      else{
        return(
          <div style = {div}>
            StatsURL: <input type = "text" value ="sample.com"/>
            RosterURL: <input type = "text" value="sample.com/roster"/>
            <input type = "button" value="generate"/>
          </div>
        );
      }
    }
   }

   export default Home;