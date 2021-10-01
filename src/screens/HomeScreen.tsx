import React, {useEffect, useContext} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useFetch from '../api/useFetch';
import {AppContext} from '../AppContext/AppContext';
import Peliculas from './Peliculas';

export default function HomeScreen() {
  const {peliculas} = useContext(AppContext);
  const {loading} = useContext(AppContext);
  const {traerPeliculas} = useFetch();

  useEffect(() => {
    traerPeliculas();
  }, []);

  

//let peliculasData = Object.keys(peliculas);

//for (let i = 0; i < peliculasData.length ; i++) {
  //console.log(peliculas[peliculasData[i]]);
//}

console.log(peliculas)

  return (
    <View style={{flex: 1, justifyContent: 'center', aligContent: 'center'}}>
      <Text>
        {' '}
        {loading ? (
          <ActivityIndicator color="red" size={20} />
        ) : peliculas.results.length > 0 ? (
          peliculas.results.map((pelicula) => {
            return (
              <Peliculas
                key = {pelicula.id}
                nombre={pelicula.original_title}
                imagen={pelicula.poster_path}
              />
            );
          })
        ) : (
          'je'
        )}
      </Text>
      
    </View>
  );
}
