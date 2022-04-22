import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import LaunchCard from "./LaunchCard";
class ListViewLaunchDetails extends Component {
  render() {
    let name = this.props.name;
    let details = this.props.details;
    let date = this.props.date;
    let reused = this.props.reused;

    return (
      <View style={styles.main}>
        <View style={styles.subview1}>
          <View style={styles.name}>
            <Text>{name}</Text>
          </View>
          <View style={styles.status}>
            <Text>{date}</Text>
          </View>
        </View>
        <View style={styles.subview2}>
          <Text>{reused ? "Resused" : "Not Reused"}</Text>
        </View>
        <View style={styles.details}>
          <Text>{details ? details : "No Details Available"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    minHeight: 400,
    width: "100%",
    padding: "2%",
    borderRadius: 5,
    marginTop: 20,
  },
  subview1: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: 50,
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
    height: 50,
  },
  details: {
    elevation: 3,
    borderRadius: 6,
    padding: 5,
    backgroundColor: "white",
    alignItems: "center",
    width: "100%",
    height: 100,
    flex: 1,
  },
});
export default ListViewLaunchDetails;
