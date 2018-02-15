<template>
  <ul>
    <li v-for="item in items" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "list",
  props: ["items"]
};
</script>
