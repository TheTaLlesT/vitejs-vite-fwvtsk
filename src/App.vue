<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import { Splitpanes, Pane } from 'splitpanes';
import 'splitpanes/dist/splitpanes.css';
import ModulesExample from './components/ModulesExample.vue';
</script>

<template>
  <splitpanes id="devmain" class="transparent-theme">
    <pane size="20" min-size="5" max-size="50">
      <a href="https://vuejs.org/" target="_blank">
        Naviagtion
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </pane>
    <pane min-size="5">
      <splitpanes horizontal>
        <pane><ModulesExample /><!--<HelloWorld msg="Vite + Vue" />--></pane>
        <pane size="20" min-size="5" max-size="50">Console</pane>
      </splitpanes>
    </pane>
    <pane size="20" min-size="5" max-size="50">
      <a href="https://vitejs.dev" target="_blank">
        Properties
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
    </pane>
  </splitpanes>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
