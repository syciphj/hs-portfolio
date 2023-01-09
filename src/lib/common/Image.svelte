<script lang="ts">
  import { ImageCloudinaryService, key as imgKey, type ImageParams } from '$lib/services/image-formatter.service';
  import { getContext } from 'svelte';

  export let imgPath: string;
  export let sizes: string;
  export let params : ImageParams;  
  export let hoverEffect = "true";

  let style = ''
  let imgSrcSet: string = '';
  let pictureSrcSet: string = '';
  let src: string = '';

  const imageService: ImageCloudinaryService = getContext(imgKey);
  if(imageService) {
    const sizesSrcsetArr = imageService.getSizesSrcset(imgPath, params)
    const densitySrcsetArr = imageService.getDensitySrcset(imgPath, params)
    src = sizesSrcsetArr[0].split(' ')[0];

    sizesSrcsetArr.forEach(src => {imgSrcSet += src});
    densitySrcsetArr.forEach(src => {pictureSrcSet += src});
  } else {
    console.log('Image service not initialized');
  }
  
</script>
<picture>
  <!-- For this portfolio, I am using picture srcset based on pixel density (1x, 2x, 3x). 
  Using Pixel density will ignore the picture sizes param
  https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_same_size_different_resolutions -->
  <source srcset={pictureSrcSet} type="image/webp">
  <img  
      loading="lazy"
      decoding="async"
      src={src}
      srcset={imgSrcSet}
      width={params.width}
      height={$$props.height}
      sizes={sizes}
      alt={$$props.alt}
      class={$$props.class}
      class:hoverEffect={hoverEffect === 'true'}
      >
</picture>

<style>
  img.hoverEffect:hover {
    transform: scale(1.2)
  }

  img{
    transition: height 0.5s ease-in-out, transform 0.6s ease-in-out; 
    object-fit: contain;
  }
</style>

