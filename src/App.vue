<template>
  <v-app dark>
    <!-- <v-navigation-drawer v-model='mini' app fixed left :mini-variant="mini">
      <v-list>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-toolbar app>
      <v-toolbar-side-icon @click.native.stop='mini = !mini'></v-toolbar-side-icon>
    </v-toolbar> -->
    <main>
      <v-container>
        <router-view/>
      </v-container>
    </main>
    <v-footer app>
      <v-flex text-xs-center>
      <v-icon>code</v-icon> by <a href='https://github.com/thezachcannon' target="_blank">TheZachCannon</a>
        
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        mini: false
      }
    }
  }

</script>

<style lang='less'>
  @import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons";

</style>
