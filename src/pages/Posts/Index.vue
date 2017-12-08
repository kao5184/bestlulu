<template>
  <div class="posts">
    <h3> Recent Posts </h3>
    <div class="md-layout md-gutter md-alignment-center">
      <card v-for="i in 10" key="i" class="md-layout-item md-size-33 md-medium-size-50 md-small-size-100 md-xsmall-size-100">
      </card>
    </div>
  </div>
</template>

<script>
import card from 'components/Posts/Card.vue'

export default {
  name: 'Posts',
  components: {
    card
  },
  data () {
    return {
       }
  }
}
</script>

<style lang="scss" scoped>
// @import "vue-material/dist/theme/engine.scss";
</style>
