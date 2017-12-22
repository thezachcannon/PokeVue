<template>
  <v-flex xs12 sm4 md4 lg4>
        <v-progress-circular indeterminate color="red" v-if='loading'></v-progress-circular>  
    <v-card v-if='!loading'>
      <v-flex :class='colorClass'>
        <v-card-media contain :src='sprite' height='150px'></v-card-media>
      </v-flex>
      <v-card-title :class='colorClass + "--text"'>{{pokemon.name | capitalize}}</v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'pokemonCard',
    props: {
      pokeNo: {
        type: Number,
        required: true
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    computed: {
      sprite: function () {
        if (this.pokemon != undefined) {
          return this.pokemon.sprites.front_default;
        }
      },
      colorClass: function () {
        if (this.pokemon != undefined) {
          let primaryType = this.pokemon.types.find(x => x.slot == 1).type.name
          switch (primaryType) {
            case 'bug':
              return 'light-green'
              break;
            case 'dragon':
              return 'deep-purple'
              break;
            case 'ice':
              return 'light-blue lighten-4'
              break;
            case 'fighting':
              return 'red darken-4'
              break;
            case 'fire':
              return 'red'
              break;
            case 'flying':
              return 'purple lighten-4'
              break;
            case 'grass':
              return 'green'
              break;
            case 'ghost':
              return 'deep-purple lighten-1'
              break;
            case 'ground':
              return 'amber lighten-3'
              break;
            case 'electric':
              return 'yellow darken-1'
              break;
            case 'normal':
              return 'grey lighten-2'
              break;
            case 'poison':
              return 'deep-purple accent-3'
              break;
            case 'psychic':
              return 'pink lighten-2'
              break;
            case 'rock':
              return 'brown lighten-1'
              break;
            case 'water':
              return 'light-blue darken-1'
              break;
          }
        } else {
          return 'black'
        }
      }
    },
    data: () => {
      return {
        pokemon: undefined
      }
    },
    created() {
      this.loading = true;
      this.$http.get('/pokemon/' + this.pokeNo).then((data) => {
        this.pokemon = data.data;
        this.loading = false;
      }).catch((error) => {
        console.log(error)
        this.loading = false;
      })
    }
  }

</script>

<style>


</style>
