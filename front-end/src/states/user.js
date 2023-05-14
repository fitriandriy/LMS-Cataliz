import { defineStore } from 'pinia';

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
          _id: null,
          name: null,
          email: null,
          role: null
        },
    }),
    getters: {
      getUser(state){
          return state.user
        }
    },
})