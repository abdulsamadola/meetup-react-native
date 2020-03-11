import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <WebView
        style={{ maxHeight: "35%", flex: 1 }}
        javaScriptEnabled={true}
        source={{
          uri:
            "https://www.youtube.com/embed/lkoJL9v3cAY?rel=1&autoplay=1&showinfo=0&controls=0"
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  }
});
export default MovieDetail;
