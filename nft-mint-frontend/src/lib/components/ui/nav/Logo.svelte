<script lang="ts">
  import LogoLight from '$lib/assets/LogoLight.png'
  import LogoDark from '$lib/assets/LogoDark.png'
</script>

<div class="m-3">
  <img
    class="absolute h-[3rem] w-[3rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    alt="website logo (light)"
    src="{LogoDark}"
  />
  <img
    class="h-[3rem] w-[3rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    alt="website logo (light)"
    src="{LogoLight}"
  />
</div>
