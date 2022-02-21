import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Caption,
  Paragraph,
  Subheading,
  Surface,
  Title,
} from "react-native-paper";

const TopNewsCard = ({ item, navigation }) => {
  const cardWidth = Dimensions.get("window").width;
  return (
    <Surface
      style={{
        marginHorizontal: 5,
        borderRadius: 5,
        width: cardWidth - 100,
        height: 150,
        elevation: 5,
        marginVertical: 5,
        backgroundColor: "lightcoral",
      }}
    >
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: item?.urlToImage }}
          style={{
            resizeMode: "stretch",
            height: "100%",
            width: "100%",
            borderRadius: 5,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", { news: item });
          }}
          style={{
            position: "absolute",
            flex: 1,
            zIndex: 99,
            padding: 5,
          }}
        >
          <Subheading
            numberOfLines={4}
            ellipsizeMode="tail"
            style={{
              fontSize: 22,
              color: "white",
              fontWeight: "bold",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: 5,
              borderRadius: 5,
            }}
          >
            {item?.title}
          </Subheading>
        </TouchableOpacity>

        <View
          style={{
            position: "absolute",
            flex: 1,
            zIndex: 99,
            bottom: 0,
            paddingHorizontal: 5,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            flexDirection: "row",
            justifyContent: "space-between",
            maxWidth: cardWidth - 100,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          <Caption
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ color: "white", fontWeight: "bold" }}
          >
            {new Date(item?.publishedAt).toDateString()}
            {"   "}
          </Caption>
          <Caption
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              color: "white",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {item?.author}
          </Caption>
        </View>
      </View>
    </Surface>
  );
};

export default TopNewsCard;

const styles = StyleSheet.create({});
