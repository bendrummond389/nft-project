<script lang="ts">
  import LogoLight from '$lib/assets/LogoLight.png'
  import LogoDark from '$lib/assets/LogoDark.png'
</script>

<div class="overflow-hidden">
  <div
    class="animate-spin-slow lg:h-[25rem] lg:w-[25rem] h-[18rem] w-[18rem] m-auto "
  >
    <img
      class="absolute lg:h-[25rem] lg:w-[25rem] h-[18rem] w-[18rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      alt="Main spinning logo"
      src="{LogoDark}"
    />
    <img
      class="lg:h-[25rem] lg:w-[25rem] h-[18rem] w-[18rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      alt="Main spinning logo"
      src="{LogoLight}"
    />
  </div>
</div>
