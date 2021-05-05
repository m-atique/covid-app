import React,{useState,useEffect}from 'react';
import {FormControl,NativeSelect,Grid} from '@material-ui/core'
import styles from './CountryPicker.module.css'
import {countries} from '../../api'


const CountryPicker=({handleCountryChange})=>{
    const [counteries,setCounteries]= useState([])
    useEffect(()=>{
        const fecthCountries = async()=>{
            setCounteries(await countries())
        }
        fecthCountries()
        
    },[setCounteries])
    return(
        <Grid container  justify ='center'>

            <FormControl className= {styles.formControl} >
                <NativeSelect defaultValue ='' onChange={(e)=>handleCountryChange(e.target.value)}className= {styles.selector} >
                    <option value =''> Global</option>
                    {counteries.map((country,i)=><option  key = {i} value ={country} >
                       {country}
                    </option>)}
                </NativeSelect>
            </FormControl>
        </Grid>
        
    )
}

export default CountryPicker