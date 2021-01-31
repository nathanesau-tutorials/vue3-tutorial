const template = `<div>
<h1>{{ title }}</h1>
</div>`;

const data = function data() {
  return {
    title: "Vue3 Tutorial",
  };
};

const App = { data, template };

Vue.createApp(App).mount('#app');