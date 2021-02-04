<template>
  <h1>DC Heroes ({{ heroesCount }})</h1>
  <ul>
    <li v-for="hero in dcHeroes" :key="hero">{{ hero.name }}</li>
  </ul>
  <form @submit.prevent="addHero">
    <input v-model="newHero" placeholder="Type Hero Name Here"/>
    <button type="submit">Add Hero</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeroes: [
        {name: 'SuperGirl'},
        {name: 'Flash'},
        {name: 'Arrow'},
        {name: 'Batman'},
        {name: 'Superman'}
      ]
    }
  },
  methods: {
    addHero() {
      if (this.newHero === "") {
        return;
      }
      this.dcHeroes.push({'name': this.newHero});
      this.newHero = "";
    }
  },
  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    }
  }
}
</script>