import { UIState } from './';


   type UIActionType = 
   | { type: '[UI] - SwitchTheme'  }


   export const uiReducer = ( state: UIState, action: UIActionType ): UIState => {
   
      switch ( action.type ) {
       case '[UI] - SwitchTheme':
               return {
                   ...state,
                   theme: !state.theme
               }

           default:
               return state;
       }
   };