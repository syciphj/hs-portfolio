<script>
  import Socials from '$lib/common/Socials.svelte'
</script>

<section class="hero">
  <h1>Heya, Henri here.</h1>
  <h2>I design, code, and lead global teams. </h2>
  <p>For 5 years now, I have been leading support and development teams. On top of that, I design and implement delightful user experiences for both mobile and desktop.</p>

  <div class="socials-container"> 
    <Socials/>
  </div>
  

  
</section>

<div class="scroll">
  <p>Scroll Down</p>
  <span id="mouse">
    <span id="caret-down"></span>
  </span>

</div>


<style>
  .hero {
    width: 45vw;
  }


  h1 {
    font-weight: 700;
    font-size: 3rem;
    margin: 110px 0 10px 0;
  }

  h2 {
    font-weight: 600;
    font-size: 2rem;
    margin: 0 0 10px 0;
    color: black;
  }

  .socials-container {
    width: 10em;
  }
  
  .scroll {
    margin-top: 2em;
    align-self: center;
    display: flex;
    flex-direction: column;
  }

  .scroll p{
    font-size: 0.8rem;
  }

  #mouse {
    display:flex;
    align-self: center;
    justify-content: center;
    width: 25px;
    height: 40px;
    border: 1.5px solid rgba(36, 36, 36, 50%);
    border-radius: 40px;
  }

  #caret-down {
    display:flex;
    position: absolute;
    align-self: flex-start;
    width: 5px;
    height: 10px;
    background-color: var(--color-theme-1);
    border-radius: 40px;
    animation: 1s ease-out 0s infinite alternate bounce;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
      opacity: 0
    }
    
    100% {
      transform: translateY(15px);
      opacity: 100%
    }
  }

  @media (max-width: 1200px) {
  .hero {
    width: 75vw;
  }

  h1 {
    margin: 0;
  }

  .scroll {
    display: none;
  }
}


</style>