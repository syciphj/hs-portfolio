<script>
  import socials from '$lib/services/socials.service';

  export let orientation = 'horizontal';
  export let displayText = 'false'; 
</script>

<div class="socials" class:vertical={orientation === 'vertical'}>
  {#each socials as social} 
    <a href={social.href} alt={social.alt} aria-label={social.ariaLabel}>
      <svelte:component this={social.componentPath} class="socials-icon"></svelte:component>
      {#if displayText === 'true'}
      <span class="social-text">{social.displayText}</span>
      {/if}
    </a>
  {/each}
</div>

<style>

.socials {
  display: flex;
  justify-content: space-between;
}

.socials.vertical {
  flex-direction: column;
  height: 100%;
}

.socials a {
  display:flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.socials a:hover {
  text-decoration: none;
  color: var(--color-theme-1);
}

.social-text {
  margin-left: 2em;
  font-size: 0.9rem;
}


</style>