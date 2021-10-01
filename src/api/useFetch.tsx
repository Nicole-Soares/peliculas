import {useContext} from 'react';
import token from '../../variables/token';
import {AppContext} from '../AppContext/AppContext';



export default function useFetch() {
  const {setPeliculas} = useContext(AppContext);
  const {url} = useContext(AppContext);
  const {idioma} = useContext(AppContext);
  const {setLoading} = useContext( AppContext);
  
  async function traerPeliculas() {
    try {
      setLoading(true);
      let peticion = await fetch(`${url}?api_key=${token}&language=${idioma}`);
      let res = await peticion.json();
      setPeliculas(res);
      
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  return {traerPeliculas};
}
