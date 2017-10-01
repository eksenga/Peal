import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHalf}>
        </View>

        <View style={styles.bottomHalf}>
          <View style={styles.configSection}><Text style={styles.configText}>Peal</Text></View>
          <View style={styles.configSection}><Text style={styles.configText}>From</Text></View>
          <View style={styles.configSection}><Text style={styles.configText}>Till</Text></View>
          <View style={styles.configSection}><Text style={styles.configText}>Using</Text></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#b2b2b2',
    alignItems: 'flex-start',
    justifyContent: 'space-between', 
    paddingLeft: 10,
  },

  topHalf: {
    flex: 0.7,
  },
  
  bottomHalf: {
    flex: 0.3,
    flexDirection: 'column'
  },

  configSection: {
    flex: 0.2,
  },

  configText: {
    width: 200,
    height: 30,
    fontSize: 20,
  },
});
