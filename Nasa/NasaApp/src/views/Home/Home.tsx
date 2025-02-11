import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { format, sub } from "date-fns";
import { Header } from "../../components/Header";
import TodaysImage from "../../components/TodayImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";
import { PostImage } from "../../types";

import fetchAPI from "../../utils/fetch";

export const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchAPI();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse =
          await fetchAPI(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);

        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodayImage().catch(null);
    loadLast5DaysImage().catch(null);
  }, []);

  /* console.log(lastFiveDaysImages); */

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)'
  },
});

export default Home;