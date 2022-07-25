import { FC, useReducer } from 'react';
import { fetchIpInfo } from '../../helper/fetch';
import { IPResponse } from '../../interfaces';

import { DataContext , dataReducer} from './';

export interface DataState {
    isLoaded: boolean;
    data: IPResponse ;
}


const DATA_INITIAL_STATE: DataState = {
   isLoaded: false,
   data: {
      ip: ''
   }
}

interface Props {
   children?: React.ReactNode
}


export const DataProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( dataReducer, DATA_INITIAL_STATE );

   const getData = async(ip: string) => {


      try {
         const ipDataSearch = await fetchIpInfo(ip)
         if( ipDataSearch ) {
            
            dispatch({ type: '[Data] - setData', payload: ipDataSearch!  })
         }
         
      } catch (error) {
         console.log(error)
         
      }

    
   }

   const removeData = () => {
      dispatch({ type: '[Data] - removeData' })
   }

   return (
       <DataContext.Provider value={{
          ...state,

          //method
          getData,
          removeData

       }} >
         { children }
       </DataContext.Provider>
   )
};