<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Windi CSS</title>
  <meta name="title" content="SvelteKit ❤️ Windi CSS" />
  <meta name="description" content="SvelteKit and Windi CSS toggle dark/light theme demo" />
  <meta name="keywords" content="Svelte, SvelteKit, Svelte-kit, Windi CSS, HTML, CSS, JavaScript" />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Windi CSS" />
  <meta property="og:description" content="SvelteKit and Windi CSS toggle dark/light theme demo" />
  <meta
          property="og:image"
          content="https://sveltekit-windi.netlify.app/screenshot.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://metatags.io/" />
  <meta property="twitter:title" content="SvelteKit ❤️ Windi CSS" />
  <meta
          property="twitter:description"
          content="SvelteKit and Windi CSS toggle dark/light theme demo"
  />
  <meta
          property="twitter:image"
          content="https://sveltekit-windi.netlify.app/screenshot.png"
  />
</svelte:head>

<script>
  import ToggleTheme from '../lib/ToggleTheme.svelte'
  import { theme } from './store'
</script>

<div class="prose max-w-none">
  <h1>Hello {$theme} world</h1>
  <h2>From SvelteKit + WindiCSS</h2>

  <ToggleTheme/>

  <pre>
<code>
pnpx degit <a href="https://github.com/dansvel/sveltekit-windicss">dansvel/sveltekit-windicss</a> myproject
</code>
  </pre>
  <h3>Specification : </h3>
  <ul>
    <li>@sveltejs/kit: "next" (1.0.0-next.115)</li>
    <li>vite-plugin-windicss: "next" (0.16.0-beta.23)</li>
    <li>@sveltejs/adapter-static: "next" (1.0.0-next.13)</li>
  </ul>

  <h3>Features : </h3>
  <ul>
    <li>store using localstorage for theme</li>
    <li>dark mode correctly before everything get rendered</li>
    <li>dark mode for Windi typography plugin</li>
  </ul>

  <a href="https://github.com/dansvel/sveltekit-windi">
    <strong>Go to Repo</strong>
  </a>

</div>
