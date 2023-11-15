<script lang="ts">
  import EthereumSetup from '$lib/components/ethereum/contract/EthereumSetup.svelte'
  import Nav from '$lib/components/ui/nav/Nav.svelte'
  import '../app.postcss'
  import { ModeWatcher } from 'mode-watcher'
</script>

<ModeWatcher />
<EthereumSetup />

<Nav />
<slot />
