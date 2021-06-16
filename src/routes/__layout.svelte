<svelte:head>
  <script>
    try {
      if (localStorage.getItem('theme') === 'dark') document.querySelector('html').classList.add('dark')
    } catch (e) {}
  </script>
</svelte:head>

<script>
  import 'virtual:windi.css';
</script>

<main>
  <slot />
</main>

<style global lang="postcss">
  @import "app.postcss";

  body>#svelte>main {
    @apply p-8 max-w-4xl mx-auto;
  }
</style>
