# vue3-tutorial

Following along with https://youtu.be/e-E0UB-YDRk

# vue_cli

* use Vue using CLI

```bash
# use Vue3 Preview (as of Jan 31, 2021)
vue create vue3
cd vue3
npm run serve
```

compared to vue_cdn, we now have ``App.vue``.

Before we had

```js
App = { template, data };

createApp(App).mount('#app');
```

but now we have:

```js
import App from './App.vue'

createApp(App).mount('#app')
```