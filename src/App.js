import React, { Component } from "react";
import { CardList } from "./components/card-list/card-lest.component";
import { SearchBox } from "./components/search-box/search-box.component";
import"./App.css"
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters :[],
      SearchFiled:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(users=>this.setState({monsters:users}))
  }
  handleChange=(e) =>{
    this.setState({SearchFiled:e.target.value})
  }
  render(){
    const {monsters, SearchFiled} = this.state;
    const filterdMonsters= monsters.filter(monster=>monster.name.toLowerCase().includes(SearchFiled.toLocaleLowerCase()))
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filterdMonsters}/>
      </div>
    )
  }
}

export default App;