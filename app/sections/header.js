import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleUser = () => {
      this.setState(previousState=>{
        return{ isLoggedIn: !previousState.isLoggedIn };
      });
  };
  render() {
      let display = this.state.isLoggedIn ? 'sampleUser' : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Text>onP</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headStyle: {
    textAlign: "right",
    color: "#ffffff",
    backgroundColor: "#ff0000",
    fontSize: 15
  }
});
