import { createContext, useReducer, useEffect } from 'react'
import { useCollection } from '../hooks/useCollection';
export const AppContext = createContext()

const initialState = {
    gallery: null,
    information: null,
    imagekitKeys: null,
    isLoading: false,
    error: null,
};

const appReducer = (state, action) => {
    switch (action.type) {
        // case 'LOGIN':
        //   return { ...state, user: action.payload }
        // case 'LOGOUT':
        //   return { ...state, user: null }
        // case 'AUTH_IS_READY':
        //   return { ...state, user: action.payload, authIsReady: true }
        // case 'ALLOW_LOGIN':
        //   return { ...state, isLoginAllowed: action.payload }
        default:
          return state
      }
}

export const AppContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(appReducer, initialState);
    const { documents, isLoading, error } = useCollection("store-data");
    console.log(documents)
    useEffect(() => {
        init()
    }, [documents]);
    
    const init = async () => {
        //set store-data collection to state
        //get imagekit keys
    }
    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
          { children }
        </AppContext.Provider>
      )
}