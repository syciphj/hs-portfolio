<script lang="ts">
  import './styles.css'
  import Header from '$lib/common/Header.svelte'
  import Footer from '$lib/common/Footer.svelte'
  import {ImageCloudinaryService, key as imgKey} from '$lib/services/image-formatter.service';
  import { setContext } from 'svelte';
  setContext(imgKey, new ImageCloudinaryService());
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>

  <Footer />

</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
  }

  main {
    flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
</style>