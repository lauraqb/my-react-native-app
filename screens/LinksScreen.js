import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Pistas',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Button onPress={() => navigate("Pista1")}
          title="Pista1"
          color="#841584"
          accessibilityLabel="Learn more about this purple button">
        </Button>
        <Button //onPress={onPressLearnMore}
          title="Pista 2"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          disabled={true}>
        </Button>
      </ScrollView>
    );
  }
}

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
