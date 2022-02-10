<script>
  import 'virtual:windi.css'
  import './app.postcss'
</script>

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

<main>
  <slot />
</main>
