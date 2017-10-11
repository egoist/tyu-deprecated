
# test-vue-app

[![NPM version](https://img.shields.io/npm/v/test-vue-app.svg?style=flat)](https://npmjs.com/package/test-vue-app) [![NPM downloads](https://img.shields.io/npm/dm/test-vue-app.svg?style=flat)](https://npmjs.com/package/test-vue-app) [![CircleCI](https://circleci.com/gh/vue-land/test-vue-app/tree/master.svg?style=shield)](https://circleci.com/gh/vue-land/test-vue-app/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

Test Vue.js components with no configurations.

## Install

```bash
# Recommend to install locally
yarn add test-vue-app --dev
# Alternatively
yarn global add test-vue-app
```

## Works with

Almost any Vue project, eg:
- `vue-cli` [webpack template](https://github.com/vuejs-templates/webpack)
- Projects using [Poi](https://github.com/egoist/poi)

## Usage

Given a Vue component `Component.vue`:

```vue
<template>
  <div>Hello {{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    }
  }
}
</script>
```

And corresponding test file `Component.test.js`:

```js
import { mount } from 'vue-test-utils'
import Component from './Component.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has correct content', () => {
    const wrapper = mount(Component)
    expect(wrapper.text()).toBe('hello world')
  })
})
```

Then run `yarn/npx test-vue-app` (when it's installed locally) or `test-vue-app` (when it's installed globally) in your project as follows:

<img src="https://i.loli.net/2017/10/07/59d8e9faeb53c.png" alt="test-vue-app" width="600">

Note: Currently, `test-vue-app` works out of the box with apps using [babel-preset-vue-app](https://github.com/vuejs/babel-preset-vue-app), however you may add a `.babelrc` if you have custom needs.

### Custom jest config

You can still configure `jest` field in `package.json`, it will be merged into our default jest config.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**test-vue-app** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/egoist/test-vue-app/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
