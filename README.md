# vue3-tutorial

Following along with https://youtu.be/e-E0UB-YDRk

# vue_cli

- use Vue using CLI

```bash
# use Vue3 Preview (as of Jan 31, 2021)
vue create vue3
cd vue3
npm run serve
```

NOTE: it is best to open the `vue3` folder with vscode, not the root of our github repo.

compared to vue_cdn, we now have `App.vue`.

Before we had

```js
App = { template, data };

createApp(App).mount("#app");
```

but now we have:

```js
import App from "./App.vue";

createApp(App).mount("#app");
```

Then in `App.vue`, removing everything and put

```vue
<template>
  <h1>Hey Vue3 from cli</h1>
</template>
```

folder overview:

- `package.json`:

  - dependencies: `vue`, `eslinst`
  - scripts: `serve`, `build`

- `src`:
  - this is where the code goes

tools:

- at this point we should install the vue3 dev tools extension.
- also cool is the `vue ui` command.
- also cool is the `vetur` vscode extension.
- note: the auto hot reload is truly amazing. it just works.

useful things to know for templates:

```js
export default {
  data() {
    return {
      title: "<h1>Hey Vue 3</h1>",
    };
  },
};
```

we would need to do:

```html
<template>
  <div v-html="title">{{ title }}</div>
</template>
```

this is known as a _vue directive_. Note that `v-html` is general considered a bad practice.

`v-if` is another useful directive:

```vue
<template>
  <div v-if="showTitle">{{ title }}</div>
</template>
```

`v-show` is another useful directive:

```vue
<template>
  <div v-show="showTitle">{{ title }}</div>
</template>
```

note that with `v-show`, the element is just hidden (it's still in the DOM). with `v-if`, it will not be in DOM.

`mounted` events are very cool. for example:

```vue
<script>
// assume we have ``count`` variable in data
export default {
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
};
</script>
```

`v-text` is another useful directive.

```vue
<template>
  <div v-text="count"></div>
</tempate>
```

vue directives list:

| directive | details                                                  | covered by          |
| --------- | -------------------------------------------------------- | ------------------- |
| v-if      | n/a                                                      | end of app1         |
| v-else    | used together with `v-if`                                | end of app1         |
| v-else-if | used together with `v-if`                                | end of app1         |
| v-show    | hides element, but keeps element in DOM                  | end of app1         |
| v-for     | n/a                                                      | end of app1         |
| v-slot    | n/a                                                      |                     |
| v-text    | n/a                                                      | end of app1         |
| v-html    | dangerous, try not to use this if you can avoid it       | end of app1         |
| v-on      | n/a                                                      | end of app1         |
| v-bind    | n/a                                                      | end of app1         |
| v-model   | n/a                                                      | end of app1         |
| v-pre     | n/a                                                      |                     |
| v-cloak   | n/a                                                      |                     |
| v-once    | only update element once useful with `setInterval`, etc. | end of app1         |
| v-is      | n/a                                                      |                     |

a `v-for` example:

```html
<ul>
  <li v-for="num in 10" v-bind:key="num">{{ num }}</li>
</ul>
```

another `v-for` example:

```html
<ul>
  <li v-for="(value, key) in heroes" v-bind:key="key">{{ value.name }}</li>
</ul>
```

javascript also has an `enumerate`:

```html
<ul>
  <li v-for="(hero, index) in heroes" v-bind:key="hero">
    {{ index }} {{ hero.name }}
  </li>
</ul>
```
