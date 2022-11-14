<script lang="ts">
  import './styles.css'
  import Header from '../lib/common/Header.svelte'
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>

  <footer>
    © 2022 Henri Sycip. All rights reserved.
  </footer>

</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
  }

  footer {
    display:flex;
    flex-direction: column;
    justify-content: center;
		align-items: center;
		padding: 12px;
    background-color: var(--color-bg-0);
    font-size: 0.8rem;
  }

  @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>