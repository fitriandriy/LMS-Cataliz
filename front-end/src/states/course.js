import { defineStore } from 'pinia';

export const useCourseStore = defineStore("course", {
    state: () => ({
        course: {
          section_id: null
        },
    }),
    getters: {
      getCourse(state){
          return state.course
        }
    },
})