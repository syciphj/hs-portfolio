<script>
  import Socials from '$lib/common/Socials.svelte'
  import routes from '$lib/services/routes.service'
</script>

<footer>
  <div class="footer-rights">
    © 2022 Henri Sycip. All rights reserved.
  </div>

  <div class="footer-links">
    <ul>
    {#each routes as route}
      <li>
        <a href={route.href} aria-label="Go to {route.name} page">{route.name}</a>
      </li>
    {/each }
    </ul>

    <div class="socials-container">
      <Socials />
    </div>
    
   
  </div>

</footer>


<style>

  footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(212, 212, 212, 0.329);
    background-color: var(--color-bg-0);
    font-size: 0.9rem;
    max-width: 64rem;
    width: 100%;
    margin: 0 auto;
    height: 10em;
  }
  
  .footer-links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer-links ul{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    width: 15em;
  }

  .socials-container {
    width: 10em;
  }

  @media(max-width: 730px) {
    footer {
      flex-direction: column;
      justify-content: space-around;
      padding-top: 1em;
    }

    .footer-links {
      align-items: center;
    }
  }
  
</style>