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