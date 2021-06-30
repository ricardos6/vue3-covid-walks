# vue3-covid-walks

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Help

## Files structure

```
_src
├── _assets
│   └── i18n
├── _components -> three files for each component we use
│   └── _"xxx"
│       ├── "xxx".css
│       ├── "xxx".vue
│       └── "xxx".js
├── _config
├── _img
├── _router
│   └── index.js -> router config for the app
├── _server
│   └── server mock
├── _store
│   └── state fo the aplication with vuex
├── _utils
├── _views -> each page/view of the application
│   └── _"xxx"
│       ├── "xxx".css
│       ├── "xxx".vue
│       └── "xxx".js
├── App.js
├── app.scss
├── App.vue
├── index.css
└── main.js
```

## Vuex store

State management that centralize store for all the components in an application. We created two modules Home.js (home view state) and Login.js (user login state)

### Home.js

```javascript
export const HomeModule = {
  namespaced: true,
  state: {
    loading: false,
    walks: [],
    friends: []
  },
  // Mutations are functions that effect the STATE
  mutations: {
    FIND_WALKS(state, walks) {
      state.walks = walks;
    },
    FIND_FRIENDS(state, friends) {
      state.friends = friends;
    }
  },

  // Actions are functions you call throughout your application that call mutations
  actions: {
    async findWalks({ commit }) {
      await fetch... // API fetch
    },

    async findUserFriends({ commit }, userName) {
      await fetch... // API fetch     
    }
  }
};
```

### index.js

Here we combine the modules we created before

```javascript
import { createStore } from "vuex";
import { HomeModule } from "./Home";
import { LoginModule } from "./Login";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Home: HomeModule,
    Login: LoginModule
  }
});
```

## Views

Components that corresponds to the differents pages fo the application, it is composed by three files *.js, *.vue and *.css 

### Home.js

```javascript
import UserList from "../../components/userList/UserList.vue";
import Card from "../../components/card/Card.vue";
import ActiveWalkDetail from "../../components/activeWalkDetail/ActiveWalkDetail.vue"
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  // Set is executed before the component is created, and just after the props are resolved
  // Cannot access to data() variables
  setup() {
    const store = useStore();
    const walks = computed(() => store.state.Home.walks);

    return { walks };
  },
  // Here we specify the components we are using
  components: { Card, UserList, ActiveWalkDetail },
  name: "Home",
  methods: {
    onClickUser(user) {
      window.location = "/friend/" + user.id;
    },
    // More methods ...
  },
  // Executed when component is mounted
  async mounted() {
    await this.$store.dispatch("Home/findUserFriends", this.$store.state.Login.userInfo.login);
  },
  // Variables can be access in the component
  data() {
    return {
      itemsVisible: true
    };
  },
  // Create a variable with the name of the function
  // Here we use it to acces the store
  computed: {
    friends () {
      return this.$store.state.Home.friends
    }
  }
};
```

### Home.vue

```vue
<template>
  <div id="home" className="home">
    <!-- Catches the event @click-user emmited by the child component UserList -->
    <UserList :users="friends" @click-user="this.onClickUser" /> 
    <div className="home__list">
      <Card
        v-for="(item, i) in this.walks"
        :key="i"
        :visible="this.itemsVisible"
        :data="item"
        @click-walk="this.onClickWalk"
      />
      <div>
        <ActiveWalkDetail />
      </div>
    </div>
    <!-- We call a function when the button in clicked -->
    <button className="button" @click="this.onClickNewWalk">
      Añadir paseo
    </button>
  </div>
</template>

<!-- Load the component of the view and styles -->
<script src="./Home.js"></script>
<style src="./home.scss" lang="scss"></style>
```
