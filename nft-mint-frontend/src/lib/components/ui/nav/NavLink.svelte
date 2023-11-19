<script lang="ts">
  export let label = ''
  export let href = ''
  export let isEnabled = true
</script>

{#if isEnabled}
  <a href="{href}">
    <h4 class="scroll-m-20 m-1 md:m-3 text-sm md:text-xl font-normal tracking-tight">{label}</h4>
  </a>
{:else}
  <h4 class="scroll-m-20 m-1 md:m-3 text-primary/30 text-sm md:text-xl font-normal tracking-tight">
    {label}
  </h4>
{/if}
