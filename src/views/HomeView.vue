<template>
  <div class="home">
  <section class="HomeView">
    <UserformComp />
    <br />
    <UserListComp />
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UserformComp from '@/components/UserformComp.vue'
import UserListComp from "@/components/UserListComp.vue";

export default {
  name: 'HomeView',
  components: {
    UserformComp,
    UserListComp
  }
}
</script>

<style>
.HomeView {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5% 0 10% 10%;
}
</style>