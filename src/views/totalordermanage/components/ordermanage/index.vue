<template>
  <section>
    <panel-group></panel-group>
    <tool-bar></tool-bar>
    <tab-item></tab-item>
    <h1>{{ blogTitle }}</h1>
  </section>
</template>

<script>
import panelGroup from "./components/panelGroup";
import toolBar from "./components/toolbar";
import tabItem from "./components/tableitem";
export default {
  components: {
    panelGroup,
    toolBar,
    tabItem
  },
  render: function(createElement) {
    return createElement("h1", this.blogTitle);
  }
};
</script>

<style>
</style>
