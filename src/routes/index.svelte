<script>
  import ToggleTheme from '../lib/ToggleTheme.svelte'
  import { theme } from './store'
</script>

<svelte:head>
  <!-- Primary Meta Tags -->
  <title>SvelteKit ❤️ Windi CSS</title>
  <meta name="title" content="SvelteKit ❤️ Windi CSS" />
  <meta
    name="description"
    content="SvelteKit and Windi CSS toggle dark/light theme demo"
  />
  <meta
    name="keywords"
    content="Svelte, SvelteKit, Svelte-kit, Windi CSS, HTML, CSS, JavaScript"
  />
  <meta name="author" content="@dansvel" />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://metatags.io/" />
  <meta property="og:title" content="SvelteKit ❤️ Windi CSS" />
  <meta
    property="og:description"
    content="SvelteKit and Windi CSS toggle dark/light theme demo"
  />
  <meta
    property="og:image"
    content="https://cdn.statically.io/screenshot/full=true/sveltekit-windi.netlify.app"
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
    content="https://cdn.statically.io/screenshot/full=true/sveltekit-windi.netlify.app"
  />
</svelte:head>

<div class="prose prose-indigo dark:prose-yellow max-w-none">
  <h1 class="hidden lg:block">Hello {$theme} world, From SvelteKit + Windi CSS</h1>
  <h1 class="block lg:hidden">Hello {$theme} world,<br />From SvelteKit + Windi CSS</h1>
  <h2>Last Update : February 10th 2022</h2>
  <ToggleTheme />

  <pre><code>pnpx degit dansvel/sveltekit-windi myproject</code></pre>

  <h3>Specification :</h3>
  <ul>
    <li>@sveltejs/adapter-static 1.0.0-next.27</li>
    <li>@sveltejs/kit 1.0.0-next.263</li>
    <li>svelte 3.46.4</li>
    <li>svelte-preprocess 4.10.3</li>
    <li>vite-plugin-windicss 1.7.0</li>
  </ul>

  <h3>Features :</h3>
  <ul>
    <li>Store using localstorage for theme</li>
    <li>Dark mode correctly before everything get rendered</li>
    <li>Dark mode for Windi CSS typography plugin</li>
    <li>Prettier</li>
    <li>ESlint</li>
  </ul>

  <a href="https://github.com/dansvel/sveltekit-windi"> Go to Repo </a>
</div>
