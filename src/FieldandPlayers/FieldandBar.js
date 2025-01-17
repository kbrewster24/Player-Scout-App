import React from 'react';
import RightBar from './RightBar';
import Field from './Field'
import mytest from './test'


class FieldandBar extends React.Component {
  constructor() {
    super()
    this.state = {
      starters: [],
      subs: [],
      done: false,
      isSubbing: true,
      //test used to load in dummy data so we are not going to the server every run
      test: true
    }

    this.AddStarterRemoveSub = this.AddStarterRemoveSub.bind(this);
    this.AddSubRemoveStarter = this.AddSubRemoveStarter.bind(this);
    this.RemoveStarter = this.RemoveStarter.bind(this);
    this.RemoveSub = this.RemoveSub.bind(this);

  }
  
  componentDidMount() {
    if(this.state.test){
      console.log('hello {}', JSON.parse(mytest.body)[1])
      var temp = JSON.parse(mytest.body)
      var temp2 = temp.slice(0,10)
      var temp3 = temp.slice(10, temp.length)
      this.setState( {starters: temp2, subs: temp3, done: true})
    }
    else{
      this.getData()
    }
  }

  //gets the data from the server for player information
  getData(){
    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      console.log(JSON.parse(JSON.parse(xhr.responseText).body)[1])
    })

    xhr.open('POST', 'https://2d3hv99du2.execute-api.us-east-1.amazonaws.com/live/cart')

    xhr.onload = () => {
      var temp = JSON.parse(JSON.parse(xhr.responseText).body)
      var temp2 = temp.slice(0,10)
      var temp3 = temp.slice(10, temp.length)
      this.setState( {starters: temp2, subs: temp3, done: true})
      // this.setState( {users: JSON.parse(JSON.parse(xhr.responseText).body), done: true})
    }

    xhr.send(JSON.stringify({url: 'https://hokiesports.com/sports/mens-soccer/stats'}))
  }

  //remove a starter in case of error with algorithm selecting players
  RemoveStarter(e){
    let updatedStarters = this.state.starters.filter(
      (l, index) => {
        console.log(l.number)
        return e !== l.number;
      }
    )
    this.setState({starters: updatedStarters})
  }

  //delete sub in case of error with the algorithm
  RemoveSub(e){
    let updatedSubs = this.state.subs.filter(
      (l, index) => {
        console.log(l.number)
        return e !== l.number;
      }
    )
    this.setState({subs: updatedSubs})
  }


  //Take player of the "sub bar" and add to the field
  AddStarterRemoveSub(e) {
    console.log(e)
    if(this.state.starters.length >= 11)
      {
        this.setState({isSubbing: true})
        return
      }
    let updatedStarters = this.state.starters
    let updatedSubs = this.state.subs.filter(
      (l, index) => {
        console.log(l.number)
        if( e == l.number)
        {
          updatedStarters.push(l)
        }
        return e !== l.number;
      }
    )
    console.log(this.state.subs)
    this.setState({subs: updatedSubs, starters: updatedStarters});
  }


  //Take player off the field and put on the sub bar
  AddSubRemoveStarter(e){
    console.log("hello")
    console.log(e)
    let updatedSubs = this.state.subs
    let updatedStarters = this.state.starters.filter(
      (l, index) => {
        console.log(l.number)
        if( e == l.number)
        {
          updatedSubs.push(l)
        }
        return e !== l.number;
      }
    )
    console.log(this.state.updatedSubs)
    this.setState({subs: updatedSubs, starters: updatedStarters});
    this.render()
  }

  render () 
  {
   
    //if we are still loading info display something else
    if(!this.state.done)
    {
      return (
        <div>Users loading</div>
      )
    }
    else
    {
      console.log(this.state.starters)
      return(
        <div className="fieldandBarStyle" onClick={this.handleAllClickEvents}>

          <Field list = {this.state.starters} 
          AddSubRemoveStarter = {this.AddSubRemoveStarter}
          DeleteStarter = {this.RemoveStarter}></Field>

          <RightBar list = {this.state.subs} 
          AddStarterRemoveSub = {this.AddStarterRemoveSub} 
          DeleteSub = {this.RemoveSub}></RightBar>
          
        </div>
       );
      }
    }
   }

   export default FieldandBar;