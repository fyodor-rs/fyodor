<template>
  <div>
    <card :key="acticle.id" :acticle="acticle" v-for="acticle in acticles" />
  </div>
</template>
<script>
import card from "./card";
export default {
  components: {
    card
  },
  props: {
    acticles: {
      type: Array
    }
  }
};
</script>