import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';

const Pelicula = ({pelicula}) => {
    return(
        <View>
            <View style={styles.listPeli}>
                <View style={styles.portado}>
                </View>
                <View>
                    <Text style={styles.tituloPeli}>{pelicula.peliculas}</Text>
                    <Text style={styles.infoPeli}>Director: {pelicula.director}</Text>
                    <Text style={styles.infoPeli}>Genero: {pelicula.Genero}</Text>
                </View>
            </View>
            <View style={styles.boxbtnPeli}>
                <TouchableHighlight onPress style={styles.btnEliminar}>
                    <Text style={styles.textBtn}>Deshabilitar &times;</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress style={styles.btnActualizar}>
                    <Text style={styles.textBtn}>Actualizar</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Pelicula;

const styles = StyleSheet.create({
    listPeli:{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    tituloPeli:{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 5
    },
    infoPeli:{
        textAlign: 'right',
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    boxbtnPeli:{
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
        marginBottom : 10,
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 2,
    },
    btnEliminar:{
        backgroundColor: 'red',
        padding: 10,
        marginHorizontal: '2.5%',
        paddingHorizontal: 15,
    },
    btnActualizar:{
        backgroundColor: '#ed9121',
        padding: 10,
        marginHorizontal: 5,
        paddingHorizontal: 15,
    },
    textBtn:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    portado: {
        height: 150,
        width: 120,
        backgroundColor: '#9b9b9b',
    }
  });