
/**
 * ==============
 *   BaseController.js
 * ==============
 *
 * @author: Monero Jeanniton
 * @github: https://github.com/devmnrj
 * @contact: dev.mnr.j@gmail.com
 *
 *
 */


import React from 'react';


class BaseController {


	constructor(props)
	{
		this._trigger = 
		{
		};
	}

	trigger(action, param)
	{
		if(action && this._trigger[action])
		{
			this._trigger[action](param);
		}
		else
		{
			console.log("Controller can't respond to action " + action + "because it's not defined.\n");
		}
	}
}

module.exports = BaseController;