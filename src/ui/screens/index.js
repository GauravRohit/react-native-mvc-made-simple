import {Navigation} from 'react-native-navigation';

/* Start-Up Screen */

/* Portal Screen */
import HomeScreen from './HomeScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('app.HomeScreen', () => HomeScreen);
}
