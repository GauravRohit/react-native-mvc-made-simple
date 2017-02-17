/**
 * ==============
 *   Route.js
 * ==============
 *
 * @author: Monero Jeanniton
 * @github: https://github.com/devmnrj
 * @contact: dev.mnr.j@gmail.com
 *
 *
 */

import React, { Component } from 'react';
import Welcome from '../scene/Welcome';


import 
{
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class Route extends Component
{

	constructor(props)
	{
		super(props);
	}

	render()
	{
		
		return  <Welcome />;
	}
}