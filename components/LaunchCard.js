import { View, Text, StyleSheet } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

class LaunchCard extends Component {
  render() {
    let launches = this.props.launches;
    let launch1 = launches[0];
    let launch2 = launches[1];
    let launch3 = launches[2];
    const navigation = this.props.navigation;

    return (
      <View style={styles.main}>
        <Text
          onPress={() => navigation.navigate("Launch Details", { id: launch1 })}
          style={styles.launchName}
        >
          launch No.1{"\n"}
        </Text>
        <View style={styles.horizontalLine} />
        <Text
          onPress={() => navigation.navigate("Launch Details", { id: launch2 })}
          style={styles.launchName}
        >
          launch No.2{"\n"}
        </Text>
        <View style={styles.horizontalLine} />
        <Text
          onPress={() => navigation.navigate("Launch Details", { id: launch3 })}
          style={styles.launchName}
        >
          launch No.3{"\n"}
        </Text>
        <View style={styles.horizontalLine} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  launchName: {
    textAlign: "center",
    width: "100%",
  },
  horizontalLine: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
    marginTop: -10,
    marginBottom: 10,
  },
});
export default LaunchCard;
