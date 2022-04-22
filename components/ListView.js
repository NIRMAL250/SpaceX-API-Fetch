import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import LaunchCard from "./LaunchCard";
class ListCard extends Component {
  render() {
    let name = this.props.name;
    let status = this.props.status;
    let description = this.props.description;
    let launches = this.props.launches;
    let launch1, launch2, launch3;
    const navigation = this.props.navigation;
    if (launches.length > 0) {
      launch1 = launches[0];
      launch2 = launches[1];
      launch3 = launches[2];
    }
    return (
      <View style={styles.main}>
        <View style={styles.subview1}>
          <View style={styles.name}>
            <Text>{name}</Text>
          </View>
          <View style={styles.status}>
            <Text>{status}</Text>
          </View>
        </View>
        <View style={styles.subview2}>
          {launches.length == 0 ? (
            <Text>No Launch Available</Text>
          ) : (
            <LaunchCard navigation={navigation} launches={launches} />
          )}
        </View>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    height: "auto",
    width: "100%",
    padding: "2%",
    borderRadius: 5,
    marginTop: 20,
  },
  subview1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    minHeight: 50,
    flex: 1,
  },
  name: {
    elevation: 3,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginRight: 2,
    flex: 1,
  },
  status: {
    elevation: 3,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 2,
    flex: 1,
  },
  subview2: {
    elevation: 3,
    borderRadius: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 2,
    width: "100%",
    minHeight: 50,
    flex: 1,
  },
  description: {
    elevation: 3,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    minHeight: 100,
    flex: 1,
  },
});
export default ListCard;
