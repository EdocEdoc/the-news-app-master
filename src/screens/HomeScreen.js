import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_EVERY_NEWS, GET_TOP_NEWS } from "../api";
import { SET_EVERY_NEWS, SET_TOP_NEWS } from "../redux/actions/news";
import EveryNewsCard from "../components/EveryNewsCard";
import {
  Button,
  Divider,
  Subheading,
  Surface,
  Title,
} from "react-native-paper";
import TopNewsCard from "../components/TopNewsCard";
import DeviceCountry, { TYPE_ANY } from "react-native-device-country";
import ListHeader from "../components/ListHeader";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const everyNews = useSelector((state) => state.newsListState.everyNews);
  const topNews = useSelector((state) => state.newsListState.topNews);

  const [everyNewsList, setEveryNewsList] = useState([]);
  const [topNewsList, setTopNewsList] = useState([]);

  const [topIsLoading, setTopIsLoading] = useState(false);
  const [everyIsLoading, setEveryIsLoading] = useState(false);

  const [page, setPage] = useState(1);

  const getDeviceCountry = async () => {
    try {
      const res = await DeviceCountry.getCountryCode(TYPE_ANY);
      console.log("TYPE_ANY", res);
      if (res.code) {
        return res;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };

  const setEveryNews = async (q, more) => {
    setEveryIsLoading(true);
    try {
      const p = more ? page + 1 : 1;
      const res = await GET_EVERY_NEWS(q, p);
      /* console.log("[HomeScreen - setEveryNews]", res); */
      if (res.status === "ok") {
        if (more) {
          setEveryNewsList([...everyNewsList, ...res.articles]);
        } else {
          dispatch(SET_EVERY_NEWS(res));
        }
      }
    } catch (error) {
      console.log("[HomeScreen - setEveryNews]", error);
    }
    setEveryIsLoading(false);
  };

  const setTopNews = async (q, more) => {
    setTopIsLoading(true);
    try {
      const country = await getDeviceCountry();
      const p = more ? page + 1 : 1;
      const res = await GET_TOP_NEWS(q, country?.code.toLowerCase(), p);
      /* console.log("[HomeScreen - setTopNews]", res); */
      if (res.status === "ok") {
        if (more) {
          /* console.log(res); */
          setTopNewsList([...topNewsList, ...res.articles]);
        } else {
          dispatch(SET_TOP_NEWS(res));
        }
      }
    } catch (error) {
      console.log("[HomeScreen - setTopNews]", error);
    }
    setTopIsLoading(false);
  };

  useEffect(() => {
    if (!topNews) {
      setTopNews();
    } else {
      setTopNewsList(topNews.articles);
    }
  }, [topNews]);

  useEffect(() => {
    if (!everyNews) {
      setEveryNews();
    } else {
      setEveryNewsList(everyNews.articles);
    }
  }, [everyNews]);

  const LoadMore = async () => {
    await setTopNews(null, true);
    await setEveryNews(null, true);
    setPage(page + 1);
  };

  const setAllNews = () => {
    setTopNews();
    setEveryNews();
  };

  const renderEveryNews = ({ item }) => {
    return <EveryNewsCard item={item} navigation={navigation} />;
  };

  const renderHeader = () => {
    return (
      <ListHeader
        topNewsList={topNewsList}
        navigation={navigation}
        getDeviceCountry={getDeviceCountry}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={{ alignSelf: "center" }}>
        {everyNewsList.length > 0 && (
          <Button
            onPress={LoadMore}
            style={{ marginVertical: 20 }}
            mode="contained"
            loading={everyIsLoading || topIsLoading}
            disabled={everyIsLoading || topIsLoading}
          >
            {everyIsLoading || topIsLoading ? "LOADING ..." : "LOAD MORE"}
          </Button>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#FAFAFA" }}>
      <FlatList
        nestedScrollEnable={true}
        data={everyNewsList}
        renderItem={renderEveryNews}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl refreshing={everyIsLoading} onRefresh={setAllNews} />
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
