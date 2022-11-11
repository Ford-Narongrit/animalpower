<template>
  <div
    class="rounded-lg border-2 py-6 shadow-lg backdrop-blur-2xl bg-white/50 transition duration-300 ease-in-out hover:bg-teal-700 hover:scale-105"
  >

   <div
      class="relative h-60 w-60 rounded-full overflow-hidden bg-white mx-auto border-gray-700 border-2"
    >
      <div class="h-full bg-cover bg-center bg-no-repeat" :style="getUrlImage(image)"></div>
      />


      
    </div>
    <div class="w-2/3 mx-auto">
      <div class="text-xl font-bold">{{ name }}</div>
      <div class="text-lg">{{ birthday }}</div>
      <div class="text-lg font-normal">{{ content }}</div>
    </div>

    <div class="w-2/3 mx-auto text-right space-x-3 border-t-2 p-2 mt-5">
      <font-awesome-icon icon="fa-brands fa-twitter" class="text-2xl" />
      <font-awesome-icon icon="fa-brands fa-facebook" class="text-2xl" />
      <font-awesome-icon icon="fa-brands fa-github" class="text-2xl" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "A B",
    },
    birthday: {
      type: String,
      default: "01 September 1000",
    },
    work: {
      type: String,
      default: "at home",
    },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "/assets/images/profile.jpg",
    },
  },
  methods:
  {
    getUrlImage(imagePath)
    {
     return { 'background-image': 'url("./src/' + imagePath + '")' };
    },
  }
};
</script>

<style>
</style>
