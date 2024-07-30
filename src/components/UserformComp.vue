<template>
  <div class="FormComponent">
    <form @submit.prevent="formHandler">
      <input name="newUser" placeholder="Nombre" type="text" required />
      <input name="email" placeholder="Email" type="email" required />
      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserformComp",

  methods: {
    ...mapActions(["addUser"]),
    formHandler(event) {
      const newUser = event.target.newUser.value;
      const email = event.target.email.value;
      if (newUser.trim() === "" || email.trim() === "") return;
      this.addUser({ name: newUser, email: email });
      event.target.reset();
    },
  },
};
</script>

<style>
.FormComponent{
  align-self: start;
}
</style>
