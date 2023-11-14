<script lang="ts">
  import CollectionsCard from '$lib/components/cards/CollectionsCard.svelte'
  import Nav from '$lib/components/ui/nav/Nav.svelte'
  // Other imports if needed
</script>

<div class="m-3">
  <h1 class="text-4xl font-bold mt-4">
    Welcome to an Unnamed NFT Minting Site
  </h1>
  <p class="mt-2 text-xl">Discover, collect, and sell extraordinary NFTs</p>

  <section class="mt-6">
    <h2 class="text-3xl font-bold">Featured Collections</h2>
    <CollectionsCard />
  </section>
</div>
