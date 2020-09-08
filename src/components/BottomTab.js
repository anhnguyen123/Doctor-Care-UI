import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';

const menus = ['home', 'search1', 'hearto', 'calendar', 'user'];

export default function BottomTab() {
  return (
    <View style={styles.bottoms}>
      {menus.map((e,index) => {
        return (
          <TouchableOpacity key={index} >
            <AntDesign name={e} size={32} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottoms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
