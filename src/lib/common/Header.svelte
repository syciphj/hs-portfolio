<script lang="ts">
  import { page } from '$app/stores'
  import { base } from '$app/paths'
  import Logo from '$lib/assets/logos/HenriLogo.svelte'
  import MobileMenu from '$lib/common/MobileMenu.svelte'
  import routes from '$lib/services/routes.service'
  import MenuIcon from '$lib/assets/icons/MenuIcon.svelte'
  
  let isShowMenu = false; 
  const toggleMenu = (e: Event) => {
    if(e.type === 'keydown') {
      let keyBoardEvent = <KeyboardEvent> e; 
      if(keyBoardEvent.key !== 'Enter') { 
        return;
       } else {
        isShowMenu = !isShowMenu
       }
    }
    isShowMenu = !isShowMenu
  }
  const baseStr = base === undefined ? '' : base;

</script>

<header>
  <div class="logo">
    <a href={baseStr + '/'}>
      <Logo />
    </a>
  </div>

  <nav>
    <ul class="desktop">
      {#each routes as route}
        {#if route.name !== 'Home'}
        <li aria-current={$page.route.id?.startsWith(route.routeID) ? 'page' : undefined}>
          <a href={route.href}>{route.name}</a>
        </li>
        {/if}
      {/each}
    </ul>
    <div class="menu-container" on:click={toggleMenu} on:keydown={toggleMenu}>
      <MenuIcon class="menu-icon"/>
    </div>
  </nav>

  {#if isShowMenu}
    <MobileMenu onClose={toggleMenu}/>
  {/if}

</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
  }

  .logo {
    width: 75px;
  }

  .logo a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  nav {
    align-self: center;
  }

  .desktop{
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 14em;
  }

  li[aria-current="page"] a {
    color: var(--color-theme-1);
  }

  .desktop a {
    transition: color 0.2s linear;
    letter-spacing: 0.1em;
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: var(--font-header);
  }

  a:hover {
    text-decoration: none;
    color: var(--color-theme-1);
  }

  .menu-container{
    display:none;
    width: 1.2em;
    cursor: pointer;
  }

  @media(max-width: 768px) {
    .desktop {
      display: none;
    }

    .menu-container {
      display: block;
    }
  }
</style>