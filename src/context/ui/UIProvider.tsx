import { FC, useReducer } from 'react';

import { UIContext , uiReducer} from './';

export interface UIState {
   theme: boolean;
}


const UI_INITIAL_STATE: UIState = {
   theme: true,
}

interface Props {
   children?: React.ReactNode
}


export const UIProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );

   const toggleTheme = () => {
    dispatch({ type: '[UI] - SwitchTheme' })
   }

   return (
       <UIContext.Provider value={{
          ...state,

          // methods
          toggleTheme
       }} >
         { children }
       </UIContext.Provider>
   )
};