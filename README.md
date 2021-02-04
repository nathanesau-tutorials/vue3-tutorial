# vue3-tutorial

Following along with https://youtu.be/e-E0UB-YDRk

# vue_cli - app 1 (DC Heroes)

Note: this app is similar to the angular tour of heroes tutorial app.

info on `v-bind`:

```vue
<template>
  <input v-bind:value="newHero.name" />
</template>

<script>
export default {
  data() {
    return {
      newHero: { name: "Aquaman" },
    };
  },
};
</script>
```

disabling a html button

```vue
<template>
  <button disabled>Add Hero</button>
</template>
```

but we can actually use `v-bind` for this.

```vue
<template>
  <button v-bind:disabled="isDisabled">Add Hero</button>
</template>
```

there is actually a shorter syntax for `v-bind`, shown below.

```vue
<template>
  <button :disabled="isDisabled">Add Hero</button>
</template>
```

we can also do dynamic bindings:

```vue
<template>
  <!-- in data, attribute: "disabled" -->
  <button :[attribute]="isDisabled">Add Hero</button>
</template>
```

`v-model` is also useful. it will automatically update the object in the javascript code. you can use the dev tools to see this.

![](https://i.ibb.co/8m8mNvM/screenshot.png)

```vue
<template>
  <!-- previously we had <input :value="newHero.name"> 
note that newHero should be a string object here
-->
  <input v-model="newHero" />
</template>
```

some `v-model` tricks.

- trimming white space with `v-model.trim`, i.e. <input v-model.trim="newHero">
- only modifying data after unfocusing on a field with `v.model.lazy`, i.e. <input v-model.lazy="newHero">

it is useful with `textarea`, where user is going to keep focused on the textarea for a while. then only run javascript when they leave the textarea. much more efficient.

```vue
<template><textarea v-model.lazy="newHero" /><br /></template>
```

for event handlers, use `v-on`. simple as that. with vanilla javascript we would do:

```html
<button onclick="alert('clicked button')">My Button</button><br />
```

in vue we would do:

```html
<!-- note there is no function called ``alert`` in view -->
<button v-on:click="alert('heyy')">My Button</button><br />
```

but since there is no alert functioion defined, we should do something like this instead.

```html
<!-- note there is no function called ``alert`` in view -->
<button v-on:click="newHero = 'Wonder Woman'">Add Hero</button><br />
```

but with vue magic (similar to `:` instead of `v-bind`) we can do `@` instead of `v-on`:

```html
<button @click="newHero = 'Wonder Woman'">Add Hero</button><br />
```

some other common events would be:

- `@keydown`
- etc.

let's get to forms:

```html
<form>
  <input v-model="newHero" />
  <button type="submit">Add Hero</button>
</form>
```

and with `v-on` we can do:

```html
<form @submit="newHero = 'Wonder Woman'">
  <input v-model="newHero" />
  <button type="submit">Add Hero</button>
</form>
```

but we need to prevent submission with `@submit.prevent` which prevents the default submit action.

```html
<form @submit.prevent="newHero = 'Wonder Woman'">
  <input v-model="newHero" />
  <button type="submit">Add Hero</button>
</form>
```

if we want to execute a function on button click, we need a method. like this:

<!-- note: at this point it may make sense to think of a component as a class -->

```html
<form @submit.prevent="dcHeroes.push({'name': newHero})">
  <input v-model="newHero" />
  <button type="submit">Add Hero</button>
</form>
```

we can the code `dcHeroes.push({'name': newHero})` into the methods. Note that functions in methods cannot be arrow functions since they need the `this` keyword. for example:

```vue
<script>
export default {
  methods: {
    addHero() {
      // NOTE: need to use this to access data
      this.dcHeroes.push({ name: this.newHero });
      this.newHero = "";
    },
  },
};
</script>
```

and to call the function:

```vue
<template>
<form @submit.prevent="addHero">
  <input v-model="newHero" placeholder="Type Hero Name Here"/>
  <button type="submit">Add Hero</button>
</form>
</template>
```

more background knowledge. first, computed properties. computed properties is in between data and methods. computed properties run when dependency changes. are cached. used as property in place of data. by defaults only have getters. we can also define setters.

second, methods. run when update occurs. not cached. invoked on ``v-on`` or events. have getters and setters.

```vue
<template>
<!-- this works -->
<h1>DC Heroes {{ dcHeroes.length }}</h1>
</template>
```

but we can also do this.

```vue
<template>
<h1>DC Heroes {{ heroesCount }}</h1>
</template>
```

but then we need a computed property which is basically ``heroesCount = dcHeroes.length``. we can do this as follows.

```vue
<script>
export default {
  computed: {
    heroesCount() {
      return this.dcHeroes.length;
    }
  }
}
</script>
```

and then we can do this in the template and it will update whenever any of the computed properties change.

```vue
<template>
<h1>DC Heroes ({{ heroesCount }})</h1>
</template>
```

you can think of computed property as a static variable.

next, we will look at getters and setters for vue. we can do this.

```vue
<script>
export default {
  data() {
    return {
      firstName: "Nathan",
      lastName: "Esau"
    }
  },
  computed: {
    fullname: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(fullName) {
        const values = fullName.split(" ");
        this.firstName = values[0];
        this.lastName = values[1];
      }
    }
  }
}
</script>
```

Now whenever in code someone does ``this.fullName = "My Name"`` then we will automatically update ``firstName`` and ``lastName``.

For example:

```vue
<template>
  <p>About this site</p>
  <ul>
    <!-- setFullname method will be called on button click -->
    <!-- fullName will be updated from fullname.get method -->
    <li>Made by {{ fullName }} <span><button @click="setFullName">Change</button></span></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Nathan",
      lastName: "Esau"
    }
  },
  methods: {
    setFullName() {
      // fullname.set will get called here
      this.fullName = 'Full Name';
    }
  },
  computed: {
    fullname: {
      get() {
        return `${this.firstName} ${this.lastName}`
      },
      set(fullName) {
        const values = fullName.split(" ");
        this.firstName = values[0];
        this.lastName = values[1];
      }
    }
  }
}
</script>
```

aside. here is some code for only adding a valid hero.

```vue
<template>
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
      ],
      validHeros: new Set(['Aquaman', 'Wonder Woman'])
    }
  },
  methods: {
    addHero() {
      // only Aquaman and Wonder Woman can be added.
      if (!this.validHeros.has(this.newHero)) {
        return;
      }
      this.dcHeroes.push({'name': this.newHero});
      this.newHero = '';
    }
  }
}
</script>
```