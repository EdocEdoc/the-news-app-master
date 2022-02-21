import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Caption,
  Divider,
  IconButton,
  Paragraph,
  Subheading,
  Surface,
  Title,
} from "react-native-paper";
import AppTitle from "../components/AppTitle";
import RenderHtml from "react-native-render-html";
import * as Linking from "expo-linking";

const DetailScreen = ({ navigation, route }) => {
  const news = route?.params?.news;
  const windowWidth = Dimensions.get("window").width;

  const gotoSite = () => {
    Linking.openURL(news?.url);
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          top: 20,
          left: 5,
        }}
      >
        <IconButton
          icon={"arrow-left"}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView style={{ flex: 1, zIndex: 1, backgroundColor: "white" }}>
        <Surface style={{ elevation: 3 }}>
          <AppTitle />
        </Surface>
        <TouchableOpacity onPress={gotoSite}>
          <Title
            style={{
              textAlign: "center",
              fontWeight: "bold",
              paddingVertical: 15,
              fontSize: 26,
              letterSpacing: 0.8,
              paddingHorizontal: 10,
            }}
          >
            {news?.title}
          </Title>
        </TouchableOpacity>
        <Subheading
          style={{
            color: "black",
            fontWeight: "normal",
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          {new Date(news?.publishedAt).toDateString()}
        </Subheading>
        <Image
          source={{ uri: news?.urlToImage }}
          style={{ resizeMode: "cover", width: "100%", height: 250 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            paddingTop: 5,
            maxWidth: windowWidth,
            overflow: "visible",
            flexWrap: "wrap",
          }}
        >
          <Subheading style={{ fontStyle: "italic" }}>
            author:{" "}
            <Subheading style={{ fontWeight: "bold", fontStyle: "normal" }}>
              {news?.author}
            </Subheading>
          </Subheading>
          <Subheading style={{ fontStyle: "italic" }}>
            source:
            <Subheading style={{ fontWeight: "bold", fontStyle: "normal" }}>
              {" "}
              {news?.source?.name}
            </Subheading>
          </Subheading>
        </View>
        <TouchableOpacity onPress={gotoSite}>
          <Caption style={{ fontStyle: "italic", paddingHorizontal: 10 }}>
            article:
            <Caption style={{ fontStyle: "normal" }}> {news?.url}</Caption>
          </Caption>
        </TouchableOpacity>
        <Divider style={{ marginVertical: 10 }} />
        <RenderHtml
          contentWidth={windowWidth}
          source={{
            html: `<div>${news.content.replace(/ *\[[^\]]*]/, "")}</div>`,
          }}
          enableExperimentalMarginCollapsing={true}
          tagsStyles={tagsStyles.contentRendered}
        />
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            padding: 10,
            marginTop: -10,
            zIndex: 999,
          }}
          onPress={gotoSite}
        >
          <Subheading style={{ color: "blue" }}>read more</Subheading>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const tagsStyles = {
  contentRendered: {
    div: {
      color: "black",
      fontSize: 20,
      paddingHorizontal: 10,
      textAlign: "justify",
    },
  },
};

export default DetailScreen;

const styles = StyleSheet.create({});
