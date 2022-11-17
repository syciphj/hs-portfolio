<script>
  import website from '$lib/config/website'
  import email from '$lib/assets/logos/email.svg'
  import linkedin from '$lib/assets/logos/linkedin.svg'
  import github from '$lib/assets/logos/github.svg'
</script>

<section class="hero">
  <h1>Heya, Henri here.</h1>
  <h2>I design, code, and lead global teams. </h2>
  <p>I have been leading support and development teams for 5 years now.  I also design and implement delightful web & mobile experiences that start and end with the customer in mind. </p>

  <div class="socials">
    <a href="mailto:{website.email}" alt="LinkedIn Link" aria-label="Reach out on Email"><img src={email} alt="Email Link" aria-label="Reach out via Email"></a>
    <a href={website.linkedinURL} target="blank"><img src={linkedin} alt="LinkedIn Link" aria-label="Reach out via LinkedIn"></a>
    <a href={website.githubURL}><img src={github} alt="Github Link" aria-label="View Github"></a>
  </div>

  <!-- <div class="cta">
    <button type="button">Reach out</button>
  </div> -->
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

  .socials {
    display: flex;
    justify-content: space-between;
    width: 15vw;
  }

  .socials a {
    display:flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .socials img {
    width: 1.5em;
    height: 1.5em;
    object-fit: contain;
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
    width: 80%;
    margin-left: 2em;
  }

  h1 {
    margin: 0;
  }

  .scroll {
    display: none;
  }
}


</style>