import { IPResponse } from '../../interfaces';
import { DataState } from './';


   type DataActionType = 
   | { type: '[Data] - setData', payload: IPResponse }
   | { type: '[Data] - removeData'}



   export const dataReducer = ( state: DataState, action: DataActionType ): DataState => {
   
      switch ( action.type ) {

       case '[Data] - setData':
               return {
                   ...state,
                   data: action.payload,
                   isLoaded: true,

               }
               
        case '[Data] - removeData':
            return {
                isLoaded: false,
                data: {
                    ip: ''
                }
            }

           default:
               return state;
       }
   };