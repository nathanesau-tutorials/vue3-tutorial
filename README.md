# vue3-tutorial

Following along with https://youtu.be/e-E0UB-YDRk

# vue_cdn

- use Vue using CDN (very simple), no npm needed!

In `index.html` you can do this:

```html
<body>
  <script>
    // you will see createApp() is available
    console.log(Vue);
  </script>
</body>
```

then we can try

```html
<body>
  <script>
    console.log(Vue.createApp());
  </script>
</body>
```

an important option is `template`. so we can try:

```html
<body>
  <script>
    Vue.createApp({
      template: "<div>Hi Vue 3</div>",
    });
  </script>
</body>
```

however, this isn't enough! we need to mount the app.

```html
<body>
  <div id="app"></div>
  <script>
    Vue.createApp({
      template: "<div>Hi Vue 3</div>",
    }).mount("#app");
  </script>
</body>
```

although a more typical way to write this code is:

```html
<body>
  <div id="app"></div>
  <script>
    const app = Vue.createApp({
      template: `
        <div>
        <h1>Hi Vue 3</h1>
        </div>
      `,
    });
    app.mount("#app");
  </script>
</body>
```

Note: this makes it very easy to use Vue. It can easily replace jquery, etc. The min.js code for Vue is probably quick small.

Moving on, another important option is `data`. so we can try:

<!-- note that data is a function, called functional data -->

```html
<script>
  const app = Vue.createApp({
    data() {
      return {
        title: "Vue3 Tutorial",
      };
    },
  });
</script>
```

We can use the title in our html code using `{{ title }}` which is a standard templating thing in Jinja, etc.

combining template and data:

```html
<script>
  const app = Vue.createApp({
    template: `
        <div>
        <h1>{{ title }}</h1>
        </div>
      `,
    data() {
      return {
        title: "Vue3 Tutorial",
      };
    },
  });
</script>
```

next step: move javascript code to ``main.js``.
