import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Color from "../../themes/colors";
class MovieDetail extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Color.afrolynk,
      color: "white"
    },
    headerTintColor: "white"
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, snippet } = this.props.navigation.getParam("data");
    return (
      <View style={styles.container}>
        <WebView
          startInLoadingState
          scalesPageToFit
          style={{ maxHeight: Dimensions.get("window").height / 2, flex: 1 }}
          javaScriptEnabled={true}
          source={{
            uri: `https://www.youtube.com/embed/${id.videoId}?rel=1&autoplay=1&showinfo=0&controls=0`
          }}
        />
        <View style={{ flex: 1, backgroundColor: "#333" }}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
            {snippet.description}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default MovieDetail;
