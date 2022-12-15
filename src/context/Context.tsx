import React, { useContext, createContext, ReactNode, useReducer } from 'react'
import { productsProp, products } from '../data'
import { Reducer } from './Reducer';

interface ContextProps {
    children: ReactNode
}

interface initailProps {
    products: productsProp[];
    cart: any[]
}

export const initial:initailProps = {
    products,
    cart: Array()
}


const AppContext = createContext<any>({} as initailProps);

const Context:React.FC<ContextProps> = ({children}) => {
    const [state = initial, dispatch] = useReducer<any>(Reducer, {
        products,
        cart:[]
    } )
  return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
  )
}

export default Context

 export const DataContext = () => {
    return useContext(AppContext)
 }