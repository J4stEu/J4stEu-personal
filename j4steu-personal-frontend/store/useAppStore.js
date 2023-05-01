import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      english: false
    };
  },
  getters: {
    isEnglish: state => state.english
  },
  actions: {
    changeLanguage () {
      this.english = !this.english;
    }
  }
});
