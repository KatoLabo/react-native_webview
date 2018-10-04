import React, { Component } from 'react';
//import { Text,View,TextInput,Button } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  TouchableOpacity,
  WebView,
  Image} from 'react-native';
import { Actions } from 'react-native-router-flux';

//高さを判断して設定
const STATUSBAR_HEIGHT = Platform.OS == 'ios' ? 20 : StatusBar.currentHeight;

const SearchButton = (props) => {
  const flex = props.flex ? props.flex : 1
  return(
    <TouchableOpacity
      style={[styles.searchButton, {flex: flex}]}
      onPress={() => {props.btnEvent()}}>
      <Text style={styles.searchButtonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default class first extends React.Component {

//本来ならば，ここに各btnEventの内容を記載

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <View style={styles.buttonsLine}>
            <SearchButton label={'google'} btnEvent = {() => Actions.GOOGLE()}  />
            <SearchButton label={'yahoo'} btnEvent = {() => Actions.YAHOO()} />
          </View>

          <View style={styles.buttonsLine}>
          </View>

        </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: STATUSBAR_HEIGHT
    },

    buttons: {
      flex: 1,
    },

    buttonsLine: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderWidth: 1,
    },

    searchButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: "#b0c4de",
    },

    searchButtonText: {
      fontSize: 25,
    },
  });
