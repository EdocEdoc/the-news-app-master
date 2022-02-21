import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Title } from "react-native-paper";

const AppTitle = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        marginTop: Platform.OS === "ios" ? 80 : 30,
        marginBottom: 10,
      }}
    >
      <Title
        style={{
          fontWeight: "bold",
          backgroundColor: "black",
          color: "white",
          fontSize: 24,
          padding: 5,
          paddingHorizontal: 10,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
      >
        THE NEWS
      </Title>
      <Title
        style={{
          fontWeight: "bold",
          backgroundColor: "red",
          color: "white",
          paddingHorizontal: 5,
          fontSize: 24,
          padding: 5,
          paddingHorizontal: 10,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        APP
      </Title>
    </View>
  );
};

export default AppTitle;

const styles = StyleSheet.create({});
