const geocode =require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const address=process.argv[2]
if(!address)
{
    console.log('Please provide address.')
}
else{
geocode(address,(error,data)=>{
    // console.log('error',error)
    // console.log('dta',data)
    if(error)
    {
        return console.log(error)
    }
   const {longitude:long,latitude,location}=data
    forecast(long, latitude, (error, {weather,temperature,feelslike}) => {
        if(error)
        {
            return console.log(error)
        }
       // const {weather,temperature,feelslike}=forecastdata
        console.log(location)
        console.log(weather+'. Temperature is '+ temperature+' but it feels like '+feelslike)
      })
    
})
}