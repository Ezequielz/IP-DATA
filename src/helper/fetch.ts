import { ipData, ipLocal } from "../api";
import { IPLocalResponse, IPResponse } from "../interfaces";

const OPTIONS = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee5d129475mshf3b0e27815adb95p1f280bjsnb72a9b92d973',
      'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
    }
  };

export const fetchIpInfo = async( ip : string ) => {
  //  return fetch( `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ ip }`, OPTIONS )
  //       .then( (res: any) => res.json() )
  //       .catch( err => console.log(err) )


      try {

        const {data} = await ipData.get<IPResponse>( ip , OPTIONS )

        return data
      } catch (error) {
        console.log(error)
        return null
      }

}  

export const getIpLocal = async() => {

    try {
      const {data} = await ipLocal.get<IPLocalResponse>('')
      
    console.log(data)
    return data
    } catch (error) {
      console.error(error);
    }

    try {
      const {data} = await ipLocal.get<IPLocalResponse>('https://api.ipify.org?format=json')
      return data
    } catch (error) {
      console.error(error);
    }
}

