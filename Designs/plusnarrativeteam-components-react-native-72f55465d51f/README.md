# `@plus-components`

Home of Plus Narrative internal React Native components' library.

<small>This project was bootstrapped using [the Expo TypeScript template](https://docs.expo.dev/versions/latest/guides/typescript/)</small>
<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
 </p>

## 🚀 Getting started

### using `@plus-components`

In your `package.json` add:

```js
{
  // other deps...
  "plus-components": "bitbucket:plusnarrativeteam/components-react-native#{version}"
  // more deps...
}
```

under your dependencies then run `yarn install`.

You will be asked for your bitbucket authentication details but setting up SSH keys is recommended.

You will need to configure some default assets for you project. Run:

- `cp -r ./node_modules/plus-components/assets /assets`

In the root of your project to cp the `plus-components` default assets and replace them with your project specific assets as required.

After you have successfully installed the package you can use it like so:

```tsx
import React from 'react';
import { View } from 'react-native';
import { Typography } from 'plus-components';

export const MyComponent: React.FC = () => {
  return (
    <View>
      <Typography variant="H1">Hello<Typography>
      <Typography variant="H4">World<Typography>
    </View>
  );
}
```
___

### Requirements

- `nodejs >=v16`
- `yarn or pnpm`
- `expo-cli with SDK 44 support`


### Installing dependencies

For project dependencies just run:

- `yarn` or `pnpm install`

### Running

#### Storybook

Storybook is an open source tool for building UI components and pages in isolation.
It helps document and test components without worrying about the state or other data dependencies.

To run the product in storybook mode:

- set `extra.storybook = true` on the `app.config.json` file.
- run `yarn start`

#### Development

To view the app in development mode run:

- `yarn start`

### Testing

#### Unit tests

We use [jest](https://jestjs.io/docs/expect) for those... though we don't strictly enforce it yet. We try aim for at least
**80%** code coverage for utility function and state functions(action handlers and selectors)

You can run tests by running:

- `yarn test` or
- `yarn test --watch` if you want the tests to automatically rerun when code changes.

### Building

- `yarn build`

### Contributing

This project used eslint and prettier for code quality and standardization. You can run:

- `yarn lint:fix` or `pnpm run lint:fix`

to find and fix issues. It is advised that you configure your editor with eslint so code style issues can be highlighted
and fixed while you wrong your code.

In adding, there is a pre-commit hook that will be run on all committed files that will ensure no code style rules are broken.

Any contributions to this repo must meet the following requirements:

1. The component must be **singular** in that it only serves **one particular function**.
2. The component must be in a **self-contained directory**.
3. All component **dependencies** must be included in the component directory.
4. All components must be accompanied by a **README.md** file that explains what the code does and how it should be implemented into projects.
5. All code must adhere to the coding **standards** set out below.
6. Code **must not** contain any project specific paths or variables.
7. The ultimate goal is **plug-and-play** with minimal to no adaptation of code.
8. **Commit code to this repo with bugs and you die!**

#### Documentation

[//]: # ( [TODO])
