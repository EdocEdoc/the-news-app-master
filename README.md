# THE NEWS APP

React Native NEWS Mobile application that utilizes [NewsAPI](https://newsapi.org/)

## Requirements

To run the project, please ensure you have the following installed:

- Long-term support version 14.18.0 or higher [Nodejs](https://nodejs.org/en/).
- Version 6.14.15 npm or higher.
- [Expo Cli](https://docs.expo.dev/), run;

```bash
npm install --global expo-cli
```

- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable), run;

```bash
npm install --global yarn
```

## Installation

Clone the repository and use the master / main branch.

Run the following commands to update or install required packages.,

```bash
npm install
expo install
```

## Used Packages

- [@react-navigation/native](https://reactnavigation.org/docs/getting-started/) - used for navigation
- [react-native-screens](https://reactnavigation.org/docs/getting-started/) - package dependencies for navigation
- [react-native-safe-area-context](https://reactnavigation.org/docs/getting-started/) - package dependencies for navigation
- [react-native-paper](https://callstack.github.io/react-native-paper/) - app theme and components
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) - env organizer for API KEY
- [react-native-device-country](https://www.npmjs.com/package/react-native-device-country) - read the country where the device belongs to use for api call parameters
- [react-native-render-html](https://docs.expo.dev/guides/linking/) - render strings with html tags, content from the API sometimes includes html element
- [expo-linking](https://github.com/meliorence/react-native-render-html) - used to open link from API to the device default browser

## Development and Testing

Make sure to register and API key from the [NewsAPI](https://newsapi.org/) and add a file `.env` in the main directory that includes the following;

```bash
API_KEY=your_api_key
```

Source code can be found in `src` directory.

Run the project using [expo cli command](https://docs.expo.dev/workflow/expo-cli/#expo-start)

```bash
expo start
```

If you don't want to use expo cli and want to develop react natively eject fom it using.

```bash
expo eject
```

## Build

To build APK or AAB or IPA, please follow [EXPO documentation](https://docs.expo.dev/classic/building-standalone-apps/) for the ease of build and some tips in deploying the application in the app store and google play.
