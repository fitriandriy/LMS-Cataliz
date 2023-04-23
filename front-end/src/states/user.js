import { defineStore } from 'pinia';
import axios from "axios"

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
          name: null,
        },
    }),
    getters: {
      getUser(state){
          return state.user
        }
    },
    actions: {
      async fetchUser() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            this.user.name = response.data.name;
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})

// axios.get('http://localhost:3000/users')
// .then((result) => {
//     courseList.value = result.data.examples;
//     console.log(courseList.value)
// }).catch((err) => {
//     console.log(err.response);
// });

// export const useCounterStore = defineStore({
//   id: "counter",
//   state: () => ({
//     count: 0,
//   }),
// });
