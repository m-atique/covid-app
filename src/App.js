import React from 'react'
import {Cards,Charts,CountryPicker} from './components'
import{fetchData} from './api'
import styles from './App.module.css'
import image from './images/pic.png'



class  App extends React.Component {
  state ={
    data:{},
    country:''
  }
  async componentDidMount (){
   const fetcheddata = await fetchData()
    this.setState({data:fetcheddata})
  }

  handleCountryChange = async (country)=>{
    const fetcheddata = await fetchData(country)
    this.setState({data:fetcheddata,country:country})
  }
  
  render(){

  return (
    <div className = {styles.container}>
    
      <img src ={image} className={styles.image} alt ='Covid-Tracker'/>
      
    
     
   
     <Cards data ={this.state.data}/>
     <CountryPicker handleCountryChange= {this.handleCountryChange}/>
     <Charts data ={this.state.data} country = {this.state.country}/>
     <h1 style={{textAlign:'center'}}> Covid Tracker by Atique</h1>

    </div>
  )
}
};


export default App;
