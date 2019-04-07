import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    debugger;
  }
  
class clueButton extends Component {
    return (
        <Button onPress={() => navigate("Pista1")}
          title="Pista1"
          color="#841584"
          accessibilityLabel="Learn more about this purple button">
        </Button>
    )
}