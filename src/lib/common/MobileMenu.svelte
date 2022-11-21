<script lang="ts">
  import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition'
  import routes from '$lib/services/routes.service'
  import CloseIcon from '$lib/assets/icons/CloseIcon.svelte'

  export let onClose : any;
</script>

<div class="modal-container" >
  <div class="modal" transition:fly={{ y: -10, duration: 600}}>
    <div class="modal-actions">
      <span class="modal-title">Menu</span>
      <div class="close-btn" on:click={onClose} on:keydown={onClose}>
        <CloseIcon class="close-icon"/>
      </div>
    </div>
    <ul class="nav-links">
      {#each routes as route}
      <a href={route.href} on:click={onClose} on:keydown={onClose}>
        <li class="nav-link" aria-current={$page.route.id === route.routeID ? 'page' : undefined}>
          {route.name}  
        </li>
      </a>
      {/each}
    </ul>
  </div>
</div>


<div 
  class="modal-bg" 
  on:click={onClose} 
  on:keydown={onClose} 
  transition:fade={{duration: 300}}
  >
</div>


<style>

  .modal-container {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .modal {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 30px;
    height: 90vw;
    width: 90vw;
    background-color: white;
    z-index: 51;
    padding: 2em;
    position: fixed;
    top: 1.5em;
  }

  .modal-actions {
    display:flex;
    justify-content: space-between;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    display:flex;
    flex-direction: column;
    
  }

  .modal-bg {
    position: fixed;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(4px);
    background-color: rgba(39, 39, 42, 0.4);
    z-index: 50;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    -moz-osx-font-smoothing: grayscale;
  }

  .modal-title {
    font-weight: 600;
    opacity: 0.7;
  }

  .nav-link {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(229, 231, 235, 0.8);
  }

  .nav-link[aria-current="page"] {
    color: var(--color-theme-1);
  }

  a:hover {
    text-decoration: none;
    color: var(--color-theme-1);
  }

  .close-btn {
    display: block;
    width: 1em;
    cursor: pointer;
  }

</style>