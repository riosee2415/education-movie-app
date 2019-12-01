// 1. 리엑트를 시작한다.
import React from "react";

// 2. 필요한 컴포넌트를 리엑트 네이티브에서 가져온다.
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// 3. 컴포넌트를 사용한다. (class)
class CommonBtn extends React.Component {
  // App.js에서 호출할 때, props를 전달해줄 것을 예상하고 미리 받는 로직을 작성해둔다.
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    margin: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 160,
    height: 30,
    borderRadius: 10
  }
});

// 4. 외부에서 사용할 수 있도록 export 한다.
export default CommonBtn;
