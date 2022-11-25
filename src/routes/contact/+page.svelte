<script>
  import Socials from '$lib/common/Socials.svelte'
</script>

<svelte:head>
  <title>Contact</title>
  <meta name="description" content="Reach out" />
</svelte:head>

<h1>Let's have a chat</h1>

<article>
  <div class="contact-msg">
    <p>Interested to see other types of my work, want to collaborate with a project, 
      have some questions, or even just want to say hi? 
    </p>
    <p>While I'm not usually active on personal social media sites, 
      I monitor my professional socials more often and I can get back to you in a timely manner 
      through the channels below: 
    </p>
  </div>

<div class="socials-container">
  <Socials orientation="vertical" displayText="true"/>
</div>
</article>

<style>
  .contact-msg {
    width: 50vw;
    margin-bottom: 3em;
  }
  .socials-container {
    height: 10em;
    width: 220px;
  }

  @media(max-width: 800px) {
    .contact-msg {
      width: 80vw;
    }
  }
</style>