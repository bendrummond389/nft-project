<script lang="ts">
  import ListUserCollections from '$lib/components/cards/ListUserCollections.svelte'
  import type { ERC721Factory, ERC721Token } from '$lib/types'

  let selectedCollection: ERC721Factory.TokenMetadataStruct

  
</script>

<ListUserCollections />