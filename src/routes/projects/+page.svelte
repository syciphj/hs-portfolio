<script lang="ts">
  import ProjectList from '$lib/common/ProjectList.svelte';
  import type { PageData } from './$types';
  export let data: PageData;
</script>

<svlete:head>
  <title>Projects</title>
  <meta name="description" content="Full list of projects" />
</svlete:head>

<ProjectList projects={data.projects}/>