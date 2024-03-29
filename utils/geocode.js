const request=require('request')
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicG9vamFtaXNocmEiLCJhIjoiY2t1cG0zaHZnMDkwdDJvcXZ2eTF2Z2pneiJ9.f-lKAOS5UNDN3SjoQAUyTQ&limit=1'
    request({url,json:true},(error,{body})=>{
      // console.log(body)
        if(error)
        {
           callback('Unable to connect to location service!', undefined)
        }
        else if(body.features.length === 0)
        {
            callback('Unable to find location! Try another search.',undefined)
        }
        else{
            callback(undefined,{
               longitude:body.features[0].center[0],
               latitude: body.features[0].center[1],
               location:body.features[0].place_name
            })
        }
    })

}
module.exports = geocode;
