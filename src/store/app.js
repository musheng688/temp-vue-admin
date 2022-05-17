import { defineStore } from "pinia";

//程序的核心控制
export const useAppStore = defineStore("app", {
  state: () => {
    return {
      count: 0,
      foo: 0,
    };
  }, //类似于计算属性 有缓存功能
  getters: {
    count10() {
      return this.count + 10;
    },
  }, ///封装业务逻辑,修改state
  actions: {
    changState() {
      this.count++;
    },
  },
});
