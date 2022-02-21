import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Subheading, Surface, Title } from "react-native-paper";
import TopNewsCard from "./TopNewsCard";
import AppTitle from "./AppTitle";

const ListHeader = ({ topNewsList, navigation }) => {
  const renderTopNews = ({ item }) => {
    return <TopNewsCard item={item} navigation={navigation} />;
  };

  return (
    <View style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
      <AppTitle />

      <Surface
        style={{
          backgroundColor: "gray",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Subheading
          style={{
            fontWeight: "bold",
            color: "white",

            textAlign: "center",
            paddingTop: 10,
          }}
        >
          TOP NEWS
        </Subheading>
        <FlatList
          style={{ backgroundColor: "gray" }}
          nestedScrollEnable={true}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={topNewsList}
          renderItem={renderTopNews}
          keyExtractor={(item, index) => index.toString()}
        />
        <Subheading
          style={{
            fontWeight: "bold",
            color: "rgba(0, 0, 0, 0.8)",
            textAlign: "center",
            backgroundColor: "#FAFAFA",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 10,
            marginBottom: -5,
            marginTop: 10,
          }}
        >
          Around the World
        </Subheading>
      </Surface>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({});
