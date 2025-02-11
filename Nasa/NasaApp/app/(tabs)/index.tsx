import { StyleSheet } from 'react-native';
import React from 'react';
import Routes from '@/src/routes/Routes';


function HomeScreen(): JSX.Element {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255'
  }
});

export default HomeScreen;