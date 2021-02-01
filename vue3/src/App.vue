<template>
  <h1>{{ title}}</h1>
  <ul>
  <li>
  <div>
  Thoughts:
  <span v-if="year === '2020'">it's 2020 (bad year)</span>
  <span v-else-if="year === '2021'">it's 2021 (also bad year)</span>
  <span v-else>it's not 2020 or 2021 woohoo</span>
  </div>
  </li>
  <li>
  <div v-show="showCounter" v-once>Counter: {{ count }}</div>
  </li>
  </ul>

  <h2>Some useful directives</h2>
  <p>Heroes</p>
  <ul>
    <li v-for="(hero, index) in heroes" v-bind:key="index">{{ index }} {{ hero.name }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue 3 Tutorial",
      showCounter: true,
      year: '2022',
      count: 0,
      heroes: [
        {name: 'SuperGirl'},
        {name: 'Flash'},
        {name: 'Arrow'},
        {name: 'Batman'},
        {name: 'Superman'}
      ],
    }
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
</script>