import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Adcolony from 'react-native-adcolony';

const APPID = 'appa****YOUR APP ID****';
const ZONEID = '*** YOUR ZONE ID***';

export default class App extends Component {

  configure = () => {
    Adcolony.configure(APPID, ZONEID);
  };

  load = () => {
    Adcolony.loadAds(ZONEID);
  };

  show = () => {
    Adcolony.isReady(ZONEID, (ready)=>{
      if (ready) 
        Adcolony.showAdInterstitial(ZONEID, () => { });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.configure}>
          <Text>Configure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.load}>
          <Text>Load Interstitial</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.show}>
          <Text>Show Interstitial</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
