import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigation/Navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
