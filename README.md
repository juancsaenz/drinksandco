# Drinks&Co Mobile Coding Challenge

A coding challenge application made with React Native.

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Xcode 12](https://developer.apple.com/xcode)
- [Cocoapods 1.10.1](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)
- [yarn](https://yarnpkg.com/)

## Base dependencies

- [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview) for networking.
- [TypeScript](https://www.typescriptlang.org/) to manage typed JavaScript.
- [react-navigation](https://reactnavigation.org/) navigation library.
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.

## Installation

1. Clone the repository locally:

```sh
git clone git@github.com:juancsaenz/drinksandco.git
```

2. Navigate into the project:

```sh
cd drinksandco
```

3. Install dependencies:

```sh
yarn install
```

4. Configurate iOS project:

```sh
yarn pod
```


## Run application

##### iOS #####

```sh
yarn ios
```

##### Android #####

```sh
yarn android
```

## Folder structure

- `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder to store all images, fonts, etc.
  - `components`: Folder to store app visual components.
  - `config`: Folder to store app constants.
  - `screens`: Folder that contains all application screens/features.
      - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `Screen.tsx`
      - `styles.ts`
      - `Screen.test.tsx`
  - `redux`: This folder contains all configuration for state management.
  - `hooks`: Folder to store the custom hooks to be shared over the whole application.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of the application as per React-Native standards.

  ## Available Scripts

#### `yarn android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `yarn run ios`

Like `yarn start`, but also attempts to open the app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn lint`

Runs lint commands to verify clean code.

### `yarn start`

Runs the app in development mode.

#### `yarn test`

Runs the [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) tests.
