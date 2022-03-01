import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';

export default function HeaderConversor(){

  return(
    <View style={styles.bar}>
      <Text style={styles.text}>Conversores</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#FFF',

  },
  bar: {

    backgroundColor:'#1f8cf2',
    height: '10%',
   


  },
});

