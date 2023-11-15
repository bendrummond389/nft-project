<script lang="ts">
  import CollectionsCard from '$lib/components/cards/FeaturedCollections.svelte'
  import IntroText from '$lib/components/cards/IntroText.svelte'
  import { Button } from '$lib/components/ui/button'
  import HeroGraphic from '$lib/components/ui/heroGraphic/HeroGraphic.svelte'
  import Nav from '$lib/components/ui/nav/Nav.svelte'
  import Separator from '$lib/components/ui/separator/separator.svelte'
</script>

<div class="flex flex-col text-center items-center p-8">
  <HeroGraphic />
  <div class="bg-card rounded-lg border p-6 w-fit justify-center">
    <h1 class="text-5xl font-bold">Welcome to Theta</h1>
    <h3 class="text-xl text-primary/50 mt-3">
      Empowering Creators with Custom NFT Collections and Minting — Own Your
      Digital Universe
    </h3>

    <div class="mt-5 flex flex-row w-fit m-auto">
      <Button class="m-3" href="/collections">Browse Collections</Button>
      <Button class="m-3" variant="secondary" href="/about">Learn More</Button>
    </div>
  </div>
</div>
