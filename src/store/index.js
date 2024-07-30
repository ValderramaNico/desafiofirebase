import { createStore } from "vuex";
import firebaseApp from "../config/firebaseConfig";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export default createStore({
  state: {
    users: [],
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getUsers({ commit }) {
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, "users");
      onSnapshot(usersRef, (snapshot) => {
        const users = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        commit("setUsers", users);
      });
    },
    async addUser(context, {name, email}) {
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, "users");
      await addDoc(usersRef, { name: name, email: email });

    },
    async deleteUser(context, userId) {
      const db = getFirestore(firebaseApp);
      const userDoc = doc(db, "users", userId);
      await deleteDoc(userDoc);
    },
  },
  modules: {},
});

