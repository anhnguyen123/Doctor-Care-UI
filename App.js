
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import BottomTab from './src/components/BottomTab';
import BackgroundHeader from './src/components/BackgroundHeader';
import HomeScreen from './src/HomeScreen';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <BackgroundHeader inputStyle={styles.bg} />
        <ScrollView style={styles.scrollView}>
          <HomeScreen />
        </ScrollView>
        <BottomTab />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f1f2'
  },
  bg: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  scrollView: {
    flex: 1
  }
});

export default App;
