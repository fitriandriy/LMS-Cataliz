import { defineStore } from 'pinia';

export const useDiscussionStore = defineStore("discussion", {
    state: () => ({
        discussion: {
          _id: null
        },
    }),
    getters: {
      getDiscussion(state){
          return state.discussion
        }
    },
})