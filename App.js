import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonBtn from "./components/CommonBtn";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>Popular Movie</CommonBtn>
          <CommonBtn>NowPlaying Movie</CommonBtn>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50
  },
  btnArea: {
    flexDirection: "row"
  }
});

export default App;
