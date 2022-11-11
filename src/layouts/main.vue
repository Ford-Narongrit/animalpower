<template>
  <div id="background" class="min-h-screen">
    <div
      class="sticky top-0 flex justify-end bg-gradient-to-r from-transparent via-transparent to-teal-800 px-4 py-5 space-x-2"
    >
      <router-link
        to="/"
        class="bg-teal-500 rounded-lg p-2 font-itim text-lg text-black hover:bg-teal-600"
        >Home</router-link
      >
      <router-link
        to="/profile"
        class="bg-teal-500 rounded-lg p-2 font-itim text-lg text-black hover:bg-teal-600"
        >Profile</router-link
      >
    </div>
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#background {
  background-image: url(../assets/images/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
