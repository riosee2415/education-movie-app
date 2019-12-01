import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonBtn from "./components/CommonBtn";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>Popular</CommonBtn>
          <CommonBtn>NowPlaying</CommonBtn>
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
    flexDirection: "row",
    borderBottomColor: "#636e72",
    borderBottomWidth: 1,
    borderTopColor: "#636e72",
    borderTopWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default App;
