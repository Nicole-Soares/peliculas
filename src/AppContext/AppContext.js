import React, {createContext, useState} from "react";

export const AppContext = createContext({});

export default function AppProvider ({children}) {
    const [peliculas, setPeliculas] = useState([])
    const [url, setUrl] = useState("https://api.themoviedb.org/3/movie/now_playing");
    const [idioma, setIdioma] = useState("es-ES");
    const [loading, setLoading] = useState("false");

    return(
        <AppContext.Provider value={{peliculas, setPeliculas, url, setUrl,idioma, setIdioma, loading, setLoading}}>
            {children}
        </AppContext.Provider>
    );
}