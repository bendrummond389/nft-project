<script lang="ts">
  import LogoLightSmall from '$lib/assets/LogoLightSmall.png'
  import LogoDarkSmall from '$lib/assets/LogoDarkSmall.png'
</script>

<div class="m-3">
  <a class="flex  justify-center" href="/">
    <img
      class="absolute h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      alt="website logo (light)"
      src="{LogoDarkSmall}"
    />
  </a>
  <a href="/">
    <img
      class="h-[2rem] w-[2rem] md:h-[3rem] md:w-[3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      alt="website logo (light)"
      src="{LogoLightSmall}"
    />
  </a>
</div>
