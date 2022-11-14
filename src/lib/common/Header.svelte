<script lang="ts">
  import { page } from '$app/stores'
  import logo from '$lib/assets/logos/svelte-logo.svg'
</script>

<header>
  <div class="logo">
    <a href="/"><img src={logo} alt="logo"></a>
  </div>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname.startsWith('/projects') ? 'page' : undefined}>
        <a href="/projects">Projects</a>
      </li>
      <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    width: 4em;
    height: 4em;
  }

  .logo a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .logo img {
    width: 2em;
    height: 2em;
    object-fit: contain;
  }

  nav {
    align-self: center;
    width: 30em;
  }

  nav ul {
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    align-items: center;
  }

  li[aria-current="page"] a {
    color: var(--color-theme-1);
  }

  nav a {
    transition: color 0.2s linear;
    letter-spacing: 0.1em;
    text-decoration: none;
    padding: 0 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: var(--font-header);
  }

  a:hover {
    text-decoration: none;
    color: var(--color-theme-1);
  }
</style>