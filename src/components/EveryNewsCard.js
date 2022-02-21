import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  Caption,
  Divider,
  Paragraph,
  Subheading,
  Surface,
  Title,
} from "react-native-paper";

const EveryNewsCard = ({ item, navigation }) => {
  return (
    <Surface
      style={{
        marginHorizontal: 10,
        marginTop: 5,
        elevation: 5,
        borderRadius: 5,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { news: item })}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Image
            source={{ uri: item?.urlToImage }}
            style={{
              resizeMode: "cover",
              height: "100%",
              width: "30%",

              borderBottomRightRadius: 5,
              borderTopLeftRadius: 5,
            }}
          />
          <View style={{ flex: 1, padding: 5, paddingHorizontal: 10 }}>
            <Paragraph style={{ fontWeight: "bold" }}>{item?.title}</Paragraph>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Caption style={{ color: "black" }}>
                {new Date(item?.publishedAt).toDateString()}
              </Caption>
              <Caption style={{ color: "black", fontWeight: "bold" }}>
                {item?.source?.name}
              </Caption>
            </View>
            <Divider style={{ borderColor: "red", marginTop: 5 }} />
          </View>
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Paragraph style={{ textAlign: "justify" }}>
            {item?.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Paragraph>
          <Caption style={{ textAlign: "right" }}>{item?.author}</Caption>
        </View>
      </TouchableOpacity>
    </Surface>
  );
};

export default EveryNewsCard;

const styles = StyleSheet.create({});
