# Firebase Powered Shopping App

Video Testing the project: https://drive.google.com/file/d/1yoAcUTnZvUVxvH_Jjks_YAGVl0vsTpcz/view?usp=sharing

## Running the project

```
    git clone https://github.com/Gorchon/RN-Shopping-App-with-Firebase
```

```
    cd RN-Shopping-App-with-Firebase
```

Expo SDK and libreries are always updating their versions and deprecating others. before installing the libreries run.

```
    yarn add expo@latest
```

Next you can run:

```
    npx expo install --fix
```

Expo will show you what dependencies need to be updated. Install the dependencies expo suggest you. It is possible that there is cache and you have to run.

```
    yarn start --reset-cache

```

Dependencies to install in order to run my project:

```
- expo-constants dotenv: to manage the credentials of firebase.
- react-native-gesture-handler react-native-screens react-native-safe-area-context @react-navigation/native-stack @react-navigation/native: to work with navigation.
- react-native-svg: to render with SVGs in React native.
- rn-emoji-keyboard: to show emojis.
- firebase: Cloud service to save data.
- npx expo install expo-constants dotenv react-native-gesture-handler react-native-screens react-native-safe-area-context  @react-navigation/native-stack @react-navigation/native react-native-svg rn-emoji-keyboard firebase@9.6.7

```
Important Install this firebase version: 

```
yarn add firebase@9.6.7

```

