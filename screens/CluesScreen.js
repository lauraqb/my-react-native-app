/**CLUES SCREEN */

import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  debugger;
  return {
    clue1 : state.clue1,
    clue2 : state.clue2,
    test: "hola"
  }
}

class CluesScreen extends React.Component {
  static navigationOptions = {
    title: 'Pistas',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (

      <ScrollView style={styles.container}>
        <Button onPress={() => navigate("Pista1")}
          title="Pista 1"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled={!this.props.clue1}>
        </Button>
        <Button //onPress={onPressLearnMore}
          title= {this.props.test}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled={!this.props.clue2}>
        </Button>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(CluesScreen)

onPressPista = () => {
  this.props.navigation.navigate('Pista1');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
