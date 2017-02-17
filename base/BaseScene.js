/**
 * ==============
 *   BaseScene.js
 * ==============
 *
 * @author: Monero Jeanniton
 * @github: https://github.com/devmnrj
 * @contact: dev.mnr.j@gmail.com
 *
 *
 */

import React, { Component } from 'react';
import BaseController from './base/BaseController';


class BaseScene extends Component
{
	constructor(props)
	{
		super(props);
	}

}

BaseScene.propTypes = 
{
	/* the title of the screen */
	title: React.PropTypes.string.isRequired,

	/* the main content of the screen, think of it as the body in HTML */
	content: React.PropTypes.instanceOf(React.Component).isRequired,

	/* the controller that's responsible of handling events for this screen */
	controller: React.PropTypes.instanceOf(BaseController).isRequired
};

module.exports = BaseScene;