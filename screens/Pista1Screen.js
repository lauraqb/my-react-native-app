import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Pista1Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.getStartedText}>
                 Donde están las columnas romanas. Bajo 
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    getStartedContainer: {
      alignItems: 'center',
      marginHorizontal: 50,
    },
  });