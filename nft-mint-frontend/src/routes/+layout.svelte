<script lang="ts">
  import EthereumSetup from '$lib/components/ethereum/contract/EthereumSetup.svelte'
  import '../app.postcss'
  import { ModeWatcher } from 'mode-watcher'
</script>

<ModeWatcher />
<EthereumSetup />

<slot />
