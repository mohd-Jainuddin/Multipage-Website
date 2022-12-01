import React, { useEffect, useState } from 'react'

const API_URL = `http://www.omdbapi.com/?apikey=727bbdc1`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const [isLoading,setIsLoading] = useState(true);
    const [movie,setMovie] = useState([]);
    const [isError,setIsError] = useState({show:"false", msg:" "})
    const [query, setQuery] = useState("titanic");

    const getMovie = async(url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            if(data.Response === 'True'){
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({
                    show: false,
                    msg: ""
                })
            }else{
                setIsLoading(true)
                setIsError({
                    show:true,
                    msg:data.Error,
                })
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
       let timerout =  setTimeout(() => {
           getMovie(`${API_URL}&s=${query}`);
        },1000)

        return () => clearTimeout(timerout)
    }, [query])
    return <AppContext.Provider value={{isLoading, isError, movie, query, setQuery}}>
        {children}
    </AppContext.Provider>
}

export {AppContext, AppProvider};





// http://www.omdbapi.com/?apikey=727bbdc1&s=titanic