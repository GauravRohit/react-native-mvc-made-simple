import {
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

// screens book
import {registerScreens} from './ui/screens';

import MainController from './controllers/MainController';

import { iconsMap, iconsLoaded } from './helpers/app-icons';

/*
* This function return a promise, thus executed
* asynchronously.
*/
iconsLoaded.then(() => {
  startApp();
});


function startApp() {
  // we can be sure, that iconsMap has the icons now
  // iconsMap should have all the references to sources available now
  // <Image source={iconsMap['ios-person--active--big']} />
  // Or use them with react-native-navigation

  registerScreens();

  MainController.init();

  /*if(MainController.get_user()){
    // The user has already initialized the App
  }else{
    // Getting Started Screens are to be presented to the user
    // as well as sign-in form
  }*/

  Navigation.startSingleScreenApp({
    screen: {
      screen: 'app.HomeScreen', // unique ID registered with Navigation.registerScreen
      title: 'Mollina', // title of the screen as appears in the nav bar (optional)
      navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
      navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
    },
    animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
  });

}
