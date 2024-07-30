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
    newUser: "",
    email: "",
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setNewUser(state, newUser) {
      state.newUser = newUser;
    },
    setEmail(state, email) {
      state.email = email;
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
    async addUser({ state, commit }) {
      if (state.newUser.trim() === '' || state.email.trim() === '') return;
      const db = getFirestore(firebaseApp);
      const usersRef = collection(db, "users");
      await addDoc(usersRef, { user: state.newUser, email: state.email });
      commit("clearNewUser");
    },
    async deleteUser(index, userId) {
      const db = getFirestore(firebaseApp);
      const userDoc = doc(db, "users", userId);
      await deleteDoc(userDoc);
    },
  },
  modules: {},
});

