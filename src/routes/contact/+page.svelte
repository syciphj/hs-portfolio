<script>
  import test from '$lib/assets/logos/test.webp'
</script>

<svlete:head>
  <title>Projects</title>
  <meta name="description" content="Full list of projects" />
</svlete:head>

<h1>Projects</h1>

<section class="project-grid">
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Lift</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Sage</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>Insight</span>
  </a>
</div>
<div class="project-card">
  <a class="thumbnail-link" href="/projects/lift">
    <figure class="project-thumbnail">
      <img src={test} alt="test">
    </figure>
    <span>HPPI</span>
  </a>
</div>
<div class="project-card"></div>
<div class="project-card"></div>
</section>

<style>
  .project-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .project-card {
    background-color: bisque;
    width: 28em;
  }

  .project-thumbnail {
    margin: 0;
    overflow: hidden;
  }

  .project-thumbnail img {
    width: 28em;
    object-fit: contain;
  } 

  @media(max-width: 425px) {
    .project-thumbnail img {
    width: 21em;
    object-fit: contain;
  } 
  }
</style>