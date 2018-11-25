# vuitch
[Vuitch](https://jsilva-pt.github.io/vuitch/) is a Vue.js Application that allow to search and see Twitch streams.

## Project setup
``` bash
yarn install

yarn serve                  # Compiles and hot-reloads for development
yarn build                  # Compiles and minifies for production

yarn test:unit              # Run your unit tests
yarn test:e2e               # Run your end-to-end tests
yarn test:e2e:headless      # Run your end-to-end tests for production

chmod +x deploy.sh          # Give execute permission
./deploy.sh                 # Deploy the application to the github pages
```

## Dependencies

### [Vue.js](https://vuejs.org/)
J-Force was developed using Vue.js, a Progressive JavaScript Framework.

### [Vue CLI 3](https://cli.vuejs.org/guide/)
Vue CLI is a full system for rapid Vue.js development.

### [Vue Router](https://router.vuejs.org/)
Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.

### [Vue I18n](https://kazupon.github.io/vue-i18n/)
Vue I18n is internationalization plugin of Vue.js.

### [Vuex](https://vuex.vuejs.org/)
Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools extension](https://github.com/vuejs/vue-devtools) to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

### [Vuetify](https://vuetifyjs.com/en/)
Material Design Component Framework.

### [Axios](https://github.com/axios/axios)
Promise based HTTP client for the browser and node.js.

### [Vue Test Utils](https://vue-test-utils.vuejs.org/)
Vue Test Utils is the official unit testing utility library for Vue.js.

### [Jest](https://jestjs.io/)
Delightful JavaScript Testing :D

### [Cypress](https://www.cypress.io/)
Fast, easy and reliable testing for anything that runs in a browser.

## Possible improvements
- [ ] Make the search always available when scrolling
- [ ] Use an infinite scroll to display the stream results
- [ ] Expand unit tests to test Vuex code
- [ ] Expand e2e tests to cover some edge cases
