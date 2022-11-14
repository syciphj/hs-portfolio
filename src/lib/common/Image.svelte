<script lang="ts">
  import { ImageCloudinaryService, key, type ImageParams } from '$lib/services/image-formatter.service';
  import { getContext } from 'svelte';

  export let imgPath: string;
  export let sizes: string;
  export let params : ImageParams;  

  let style = ''

  const imageService: ImageCloudinaryService = getContext(key);
  const sizesSrcsetArr = imageService.getSizesSrcset(imgPath, params)
  const densitySrcsetArr = imageService.getDensitySrcset(imgPath, params)
  const src = sizesSrcsetArr[0].split(' ')[0];
  let imgSrcSet: string = '';
  let pictureSrcSet: string = '';
  sizesSrcsetArr.forEach(src => {imgSrcSet += src});
  densitySrcsetArr.forEach(src => {pictureSrcSet += src});
  console.log(pictureSrcSet);
</script>

<!-- 
  class
  imgPath
  params
-->
<picture>
  <source srcset={pictureSrcSet} type="image/webp">
    <!-- <source srcset="{lift_webp} 600w, {lift_webp2x} 1200w" type="image/webp"
            sizes="(max-width: 700px) 100vw, 450px"> -->
  <img  
      loading="lazy"
      decoding="async"
      src={src}
      srcset={imgSrcSet}
      sizes={sizes}
      alt="Lift Sample Images">
</picture>

<style>
  img:hover{
    transform: scale(1.2)
  }

  img{
    transition: height 0.5s ease-in-out, transform 0.6s ease-in-out; 
    object-fit: contain;
  }
</style>

