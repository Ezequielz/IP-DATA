import { createContext } from 'react';


interface ContextProps {
   theme: boolean;
   toggleTheme: () => void
}


export const UIContext = createContext({} as ContextProps );