import React from 'react';
import Icons from 'react-native-vector-icons/Fontisto';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.text}>Welcome to React Native!</Text>
        <Icons name="react" size={24} color="#000" />
      </View>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'semibold',
  },
});

export default App;
