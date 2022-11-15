<script lang="ts">
  import type {PageData} from './$types'
  export let data: PageData;
</script>

<svelte:head>
  <title>{data.post.title}</title>
  <meta name="description" content={data.post.preview?.text} />
</svelte:head>

<article>
  <h1>{data.post.title}</h1>
  <svelte:component this={data.component} />
</article>
<!-- <h1>{data.post.title}</h1>
<div>{@html data.post.description}</div> -->