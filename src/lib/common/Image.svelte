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
    // throw new Error('Image service was not initialized');
    console.log('Image service not initialized');
  }
  
</script>
<picture>
  <source srcset={pictureSrcSet} type="image/webp">
  <img  
      loading="lazy"
      decoding="async"
      src={src}
      srcset={imgSrcSet}
      sizes={sizes}
      alt="Lift Sample Images"
      class:hoverEffect={hoverEffect === 'true'}
      >
</picture>

<style>
  /* img:hover{
    transform: scale(1.2)
  } */

  img.hoverEffect:hover {
    transform: scale(1.2)
  }

  img{
    transition: height 0.5s ease-in-out, transform 0.6s ease-in-out; 
    object-fit: contain;
    width: 100%;
  }
</style>

