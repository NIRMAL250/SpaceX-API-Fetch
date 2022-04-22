import {
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Text,
  StyleSheet,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import ListViewLaunchDetails from "./ListViewLaunchDetails";

const LaunchDetailsScreen = ({ navigation, route }) => {
  const id = route.params.id;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getDetails = async () => {
    try {
      const response = await fetch(
        "https://api.spacexdata.com/v4/launches/" + id
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ListViewLaunchDetails
          name={data.name}
          details={data.details}
          date={data.date_utc}
          reused={data.cores[0].reused}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
export default LaunchDetailsScreen;
