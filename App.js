import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
 import Peliculas from './component/Peliculas';

const App = () => {
  
  const [peliculas, SetCitas] = useState([
    {id:"1", peliculas: "Hook", director: "Franco Escamilla", Genero: "Terror, Comedia"},
    {id:"2", peliculas: "Casi 300", director: "Frank Snatra", Genero: "Comedia"},
    {id:"3", peliculas: "Stand de los Besos", director: "Vincen Marcelo", Genero: "Romance, Comedia, Drama"}
  ]);

  return (
    <View>
      <View style={styles.contenedor}>
        <Text style ={styles.titulo}>Peliculas en Exhibición</Text>
      </View>
      <View>
        <FlatList
          data={peliculas}
          renderItem={ ({item}) =>
            <Peliculas pelicula={item}/> 
          }
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  titulo:{
    color: '#FFF',
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contenedor:{
    backgroundColor: '#3498DC',
  },
  listPeli:{
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomColor: '#e1e1e1',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  tituloPeli:{
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default App;