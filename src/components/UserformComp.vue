<template>
  <div class="FormComponent">
    <form @submit.prevent="addUser">
      <input v-model="newUser" placeholder="Nombre" type="text" />
      <input v-model="email" placeholder="Email" type="email" />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "UserformComp",
  computed: {
    ...mapState(["newUser", "email"]),
  },
  methods: {
    ...mapMutations(["setNewUser", "setEmail"]),
    ...mapActions(["addUser"]),
  },
};
</script>

<style scoped></style>
