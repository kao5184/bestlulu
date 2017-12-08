<template>
  <div id="app">
    <div class="page-container">
      <md-app md-mode="reveal">
        <md-app-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
          <md-tabs class="md-primary" md-alignment="centered">
            <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
            <md-tab id="tab-pages" md-label="Pages"></md-tab>
            <md-tab id="tab-posts" md-label="Posts" to="/posts"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites"></md-tab>
          </md-tabs>
        </md-app-toolbar>
        <md-app-content>
          <router-view />
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    menuVisible: false
  })
}
</script>

<style>
.md-app {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
