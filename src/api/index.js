import axios from 'axios'
const url = "https://covid19.mathdro.id/api"


//To get Modified data from api using destructring
export const fetchData = async (country) => {
   let changeableUrl = url;
   if(country){
      changeableUrl =`${url}/countries/${country}`
   }
   try {
    const {data:{confirmed,deaths,recovered,lastUpdate}} = await axios.get(changeableUrl)
    
    return {confirmed,deaths,recovered,lastUpdate}
   } catch (error) {
      console.log(error)
       
   }
}

//to get daily data 
export const fetchDailyData = async () => {
   try {
    const {data} = await axios.get(`${url}/daily`)
    const modifiedData =data.map((dialyData)=>({
      confirmed:dialyData.confirmed.total,
      deaths:dialyData.deaths.total,
      date:dialyData.reportDate
    }))
    return modifiedData
   } catch (error) {
       
   }
}
//--------------------------------- TO get countries data
export const countries = async ()=>{
   try {
      const {data:{countries}} = await axios.get (`${url}/countries`)
      return countries.map((country)=>country.name)
   } catch (error) {
      
   }
}



























//---------------------------------------------------to get whole data from api
// export const fetchData = async () => {
//    try {
//     const apiResponse = await axios.get(url)
//     return apiResponse
//    } catch (error) {
       
//    }
// }