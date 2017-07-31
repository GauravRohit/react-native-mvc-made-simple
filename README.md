# Mollina 


# What to know

## Rename app
Rename the bootstrapp from "example" to "Mollina" with "react-native-rename" Command Interface/node package.

## Libraries/packages used


### react-native-vector-icons 
A Customizable Set of Icons for React Native with support for NavBar/TabBar/ToolbarAndroid, image source and full styling.
* Setup is OK for IOS.
* I am not sure yet if it's already setup for android
* Check the documentation [here](https://github.com/oblador/react-native-vector-icons )

### react-native-navigation
Well, you already know

### native-base
Native Base is what I have talked to you about. It's not "React-Native" but something else. In fact, it's a cross-platform UI components for React Native.
I think that will allow us to use the same code base for our UI's blocks.
* Check they website [here](https://nativebase.io/ )
But, just as we have talked about, I will use a Bottom navigation-bar for IOS and you a Top one for Android.

### react-native-storage
You know

### ReactNativeLocalization
Class to localize the ReactNative interface
* Check the documentation [here](https://github.com/stefalda/ReactNativeLocalization )

### react-native-app-intro
react-native-app-intro is a react native component implementing a parallax effect welcome page using base on react-native-swiper , similar to the one found in Google's app like Sheet, Drive, Docs...
* Check the documentation [here](https://github.com/FuYaoDe/react-native-app-intro )

## The application structure

I am trying to use a MVC pattern whenever possible.
Here is an explanation (and it's kinda my own version :-; ):


* . index.*.js - entry point of the application
* . res/ - holds the resource files used
*. src/ - where application code is
*	. app.js - re-directed entry point of index.*.js above
*	. models/ - Our gateway to all type of data output and input to our application. To be more concrete, think of it as a wrapper for the localStorage and FireBae API.)
*	. ui/ - this acts as the VIEW in a MVC pattern. It's all of what the end-users see and interact with.
*		. component/
*			. commons
*		. screens/
*	. controller/ - acts as the part responsible to connect the VIEW and MODEL (and doing the logic).

* To not mess things up, we should only import a controller from a screen source file. Then, whatever the event a component needs to respond to, pass one callback/function of the controller.

* If you intend to use this pattern else where, pls credit me (github account or/and twitter).

# Things TO DO (as basic, beside building the App)

## Create App icon

#### In Android,

the app icon is picked up from <your project>\android\app\src\main\res\mipmap-xxxx\ directories.

* File name can be changed after adjusting AndroidManifest.xml in <your project>\ToDo\android\app\src\main directory.


### For IOS:

You should set AppIcon in Images.xcassets.
you should upload 9 different size icons 29pt 29pt*2 29pt*3 40pt*2 40pt*3 57pt 57pt*2 60pt*2 60pt*3.”
 
