import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class MovieLists extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>{this.props.data.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>We are !</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "flex-start",
    // height: 200,
    // width: 200,
    // backgroundColor: "red",
    // flexDirection: "row"
  }
});
export default MovieLists;
