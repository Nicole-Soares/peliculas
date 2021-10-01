import {View, Text, Image} from "react-native";
import  React  from "react";



export default function Peliculas({nombre, imagen}){

    const uriImagen = (`https://image.tmdb.org/t/p/w500${imagen}`);
    
    return (
        <View style={{width: 300,  heigth:420, display:"flex", flexDirection:"row", borderRadius: 18}}>
           
           <View style={{flex:1, shadowColor:"#000", shadowOffset:{
               width:0,
               heigth:10
           },
           shadowOpacity:0.24,
           shadowRadius: 3.84,
           elevation:10,
           borderRadius: 18
           }}>
           <Image source ={{uri:uriImagen}} style={{width: 300, height: 420, borderWidth:2, borderRadius: 18}} />
           </View>
        
    </View>
    )
    
}

