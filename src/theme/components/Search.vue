<script setup lang="ts">
  // @ts-expect-error search
  import Search from 'vitepress-plugin-search/Search.vue'
</script>

<template>
  <div>
    <Search />
  </div>
</template>

<style>
#docsearch, .VPPluginSearch-modal-back {
  --text: #555;
  --text-deep: #222;
  --text-deeper: #000;
  --border: #55555520;
}

html.dark #docsearch,
html.dark .VPPluginSearch-modal-back {
  --text: #bbb;
  --text-deep: #ddd;
  --text-deeper: #fff;
  --border: #bbbbbb20;
}

.DocSearch-Button-Placeholder {
  font-size: 16px;
}

.DocSearch-Button-Keys {
  @apply <md:min-w5;
}

.DocSearch-Button-Key, .DocSearch-Button-Container {
  font-size: 14px;
  color: var(--text);
}

.DocSearch-Form {
  border: 1px solid var(--border);
}

.DocSearch-Input {
  padding: 12px;
  background: transparent;
  margin-left: 0;
}

.DocSearch-MagnifierLabel {
  margin: 6px 0px 6px 14px;
  color: var(--text);
}

.VPPluginSearch-modal {
  padding: 12px;
  @apply <md:mt0;
}

.DocSearch-Button {
  @apply <md:w0;
}

.VPPluginSearch-search-list > div {
  color: var(--text);
}

.VPPluginSearch-search-item-icon {
  padding-top: 6px;
}

.VPPluginSearch-search-item {
  padding: 0.8rem 1rem;
  margin: 12px 0 0 0;
  transition: color ease 0.3s;
}

.VPPluginSearch-search-item:hover {
  color: var(--text-deeper);
}
</style>
