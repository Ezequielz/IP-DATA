import { createContext } from 'react';
import { IPResponse } from '../../interfaces';


interface ContextProps {
   isLoaded: boolean;
   data: IPResponse;

   getData: (ip: string) => Promise<void>,
   removeData: () => void
}


export const DataContext = createContext({} as ContextProps );