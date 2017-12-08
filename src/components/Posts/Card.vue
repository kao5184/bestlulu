<template>
  <div class="article-card">
    <md-card>
      <md-card-header>
        <div class="md-title">I'm Title</div>
        <div class="md-subhead">I'm subhead</div>
      </md-card-header>
      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
      </md-card-content>
      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card {
  margin-bottom: 45px;
}
</style>
