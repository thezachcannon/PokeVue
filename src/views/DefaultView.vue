<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>      
      <pokemon-card v-for='index in 25' :key='index' :poke-no='index'></pokemon-card>
    </v-layout>
  </v-container>

</template>

<script>
import PokemonCard from '../components/PokemonCard'
  export default {
    name: 'defaultView',
    components: {
      PokemonCard
    }
  }

</script>

<style>


</style>
