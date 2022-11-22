<script lang="ts">
  import type {PageData} from './$types'
  import {format, parseISO} from 'date-fns'
  import { afterNavigate } from '$app/navigation'
  import website  from '$lib/config/website'
  import ArrowLeftIcon from '$lib/assets/icons/ArrowLeftIcon.svelte';

  export let data: PageData;

  let canBack = false;
  afterNavigate(({ from }) => {
    if(from &&  (from.route.id === '/projects' || from.route.id === "/")) {
      canBack = true;
    }
  });

  function goBack() {
    if(canBack) history.back();
  }
</script>

<svelte:head>
  <title>{data.post.title}</title>
  <meta name="description" content={data.post.preview?.text} />
</svelte:head>

<div class="root">
  <div class="back-container">
    {#if canBack}
    <button class="back-btn" on:click={goBack} on:keydown={goBack}>
      <ArrowLeftIcon class="back-icon"/>
    </button>
    {/if}
  </div>
  

  <article>
    <time>
      <span class="date-text">{format(new Date(parseISO(data.post.date)), 'MMMM d, yyyy')}</span>
    </time>

    <h1>{data.post.title}</h1>

    <svelte:component this={data.component}/>

    <p class="disclaimer">Works are intellectual property of each client or employer. This site was created to showcase the skills, trade, profession and expertise of the designer / developer.</p>
  </article>
</div>




<style>
  .root {
    display: grid;
    grid-template-columns: 10% 80% 10%;
  }

  .back-btn {
    height: 40px;
    width: 40px;
    border-radius: 100%;
    display: flex;
    padding: 0;
    color: var(--color-theme-1);
    justify-content: center;
    align-items: center;
    border: 1.5px solid var(--color-theme-1);
    padding: 0.8rem;
  }

  .date-text {
    display: flex;
    color: rgba(155, 155, 155, 0.719);
    font-weight: 200;
  }

  .date-text::before {
    display: inline-block;
    content: '';
    width: 10px;
    height: 1rem;
    border-left: 3px solid rgba(184, 183, 183, 0.489);
    align-self: center;
  }

  .disclaimer {
    margin-top: 3em;
    font-style: italic;
    color: rgba(120, 118, 118, 0.8);
  }

  @media(max-width: 768px) {
   .root {
    grid-template-columns: 100%;
    grid-template-rows: 60px 1fr;
   }
  } 
</style>