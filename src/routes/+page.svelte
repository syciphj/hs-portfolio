<script>
  import Hero from '$lib/common/Hero.svelte'
	import SelectedProjects from '$lib/common/SelectedProjects.svelte';
  import {ImageCloudinaryService, key} from '$lib/services/image-formatter.service';
  import { setContext } from 'svelte';
  setContext(key, new ImageCloudinaryService());
</script>

<svelte:head>
  <title>Henri Sycip</title>
  <meta name="description" content="Henri's Portfolio" />
</svelte:head>

<Hero />

<SelectedProjects />