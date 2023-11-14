<script lang="ts">
  import CollectionsCard from '$lib/components/cards/FeaturedCollections.svelte'
  import Nav from '$lib/components/ui/nav/Nav.svelte'
  import Separator from '$lib/components/ui/separator/separator.svelte'
  // Other imports if needed
</script>

<div class="m-3">
  <h1 class="text-4xl font-bold mt-4">
    Welcome to an Theta
  </h1>
  <p class="mt-2 text-xl">Discover, collect, and sell extraordinary NFTs</p>

  <section class="mt-6">
    <Separator />
    <h2 class="text-3xl font-bold">Featured Collections</h2>
    <CollectionsCard />
  </section>

  <footer></footer>
</div>
