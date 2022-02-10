<script>
  import { theme } from '../routes/store'
  const toggleTheme = () => {
    if ($theme === 'dark') {
      $theme = 'light'
      document.querySelector('html').classList.remove('dark')
    } else {
      $theme = 'dark'
      document.querySelector('html').classList.add('dark')
    }
  }
</script>

<button on:click={toggleTheme}> Toggle theme </button>

<style lang="postcss">
  button {
    @apply p-1 focus:outline-none
    rounded border border-gray-500
    bg-gray-100 text-gray-700
    hover:(bg-gray-900 text-gray-300)
    transition-all duration-500;
    :global(.dark) & {
      @apply bg-gray-900 text-gray-300
      hover:(bg-gray-100 text-gray-700);
    }
  }
</style>
