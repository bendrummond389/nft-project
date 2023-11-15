<script lang="ts">
  import LogoLight from '$lib/assets/LogoLight.png'
  import LogoDark from '$lib/assets/LogoDark.png'
</script>

<div class="animate-spin-slow h-[25rem] w-[25rem] m-auto">
  <img
    class="absolute h-[25rem] w-[25rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 "
    alt="Main spinning logo"
    src="{LogoDark}"
  />
  <img
    class="h-[25rem] w-[25rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "
    alt="Main spinning logo"
    src="{LogoLight}"
  />
  
</div>
