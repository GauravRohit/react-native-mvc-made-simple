/**
 * ==============
 *   welcome.js
 * ==============
 *
 * @author: Monero Jeanniton
 * @github: https://github.com/devmnrj
 * @contact: dev.mnr.j@gmail.com
 *
 *
 */


import React, { Component } from 'react';
import 
{
  StyleSheet,
  Text,
  View
} from 'react-native';

/* We need to extends the welcome scene from BaseScene */
export default class Welcome extends Component 
{
  render() 
  {
    return (
    	<View style={styles.container}>
	    	<Text style={styles.welcome}>
	    		Welcome to React Native MVC made simple!
	    	</Text>
    	</View>
    	);
  }
}

const styles = StyleSheet.create(
{
  container: 
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: 
  {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

module.exports = Welcome;