<svelte:head>
  <script>
    try {
      let preference
      if (localStorage.getItem('theme')) {
        preference = localStorage.getItem('theme') === 'dark'
      } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          preference = true
          localStorage.setItem('theme', 'dark')
        } else {
          localStorage.setItem('theme', 'light')
        }

      }
      if (preference) document.querySelector('html').classList.add('dark')

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
