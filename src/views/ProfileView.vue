<template>
  <div class="flex items-center justify-center space-x-5 h-screen">
      <profile-card
        v-for="member in members"
        class="w-1/4"
        :key="member"
        :name="member.name"
        :work="member.work"
        :birthday="member.birthday"
        :content="member.content"
        :image="member.image"
      ></profile-card>
  </div>
</template>

<script>
import profileCard from "@/components/ProfileCard.vue";
export default {
  data() {
    return {
      members: [
        {
          name: "Narongrit thammapalo",
          birthday: "25 September 2022",
          work: "work at CNC",
          content: "KU79",
          image: "https://avatars.githubusercontent.com/u/60770383?v=4",
          isMember: true,
          score: 12,
        },
        {
          name: "Patwo thammapalo",
          birthday: "20 September 2021",
          work: "work at CNC",
          content: "KU80",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODZob7ROpqlx8WXwjueNwTOlC6Qum-yMiyfXiFRXkdhkHgybCpdvM1UpaXCL1ycfO8NI&usqp=CAU",
          isMember: true,
          score: 100,
        },
        {
          name: "Tirion Fording",
          birthday: "14 September 2000",
          work: "work at KU",
          content: "KU99",
          image: "/assets/images/profile3.jpg",
          isMember: true,
          score: 100,
        },
      ],
    };
  },
  components: {
    profileCard,
  },
};
</script>

<style></style>
