<template>
  <div id="phb__home" class="w-screen h-screen p-12 flex flex-col items-center justify-center">
    <div id="phb__context" class="flex w-full md:justify-around justify-between items-center">
      <div class="phb__title flex flex-col">
        <h1 class="md:text-6xl text-3xl font-semibold text-midnight-600">
          aexhell.
        </h1>
        <h2 class="md:text-lg text-sm italic text-midnight-500">
          reach for the moon.
        </h2>
      </div>
      <div class="phb__social flex flex-col">
        <a href="https://twitter.com/aexhell">
          <solid-hashtag-icon class="w-8 h-8" />
        </a>
        <a href="https://github.com/aexhell">
          <solid-code-icon class="w-8 h-8" />
        </a>
      </div>
    </div><!--
    <h1 class="mt-24 mb-4 text-md font-normal text-midnight-600">
      PROJECTS
    </h1>
    <div id="phb__projects" class="p-12 w-8/12 rounded-lg bg-midnight-200">
      coming soon...
    </div>-->
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage'
}
</script>
