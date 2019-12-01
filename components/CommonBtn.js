// 1. 리엑트를 시작한다.
import React from "react";

// 2. 필요한 컴포넌트를 리엑트 네이티브에서 가져온다.
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// 3. 컴포넌트를 사용한다. (class)
class CommonBtn extends React.Component {
  // App.js에서 호출할 때, props를 전달해줄 것을 예상하고 미리 받는 로직을 작성해둔다.
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    backgroundColor: "#a29bfe",
    justifyContent: "center",
    alignItems: "center",
    width: width / 3,
    height: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  txt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600"
  }
});

// 4. 외부에서 사용할 수 있도록 export 한다.
export default CommonBtn;
