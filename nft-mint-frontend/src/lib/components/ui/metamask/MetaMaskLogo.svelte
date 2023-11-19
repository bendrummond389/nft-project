<script lang="ts">
  import { onMount } from 'svelte'
  import ModelViewer from '@metamask/logo'
  import type { Viewer } from '@metamask/logo'

  let container: HTMLDivElement
  let viewer: Viewer | undefined

  onMount(() => {
    viewer = ModelViewer({
      pxNotRatio: true,
      width: 40,
      height: 32,
      followMouse: false,
      slowDrift: false,
    })

    container.appendChild(viewer.container)

    viewer.lookAt({ x: 100, y: 100 })
    viewer.setFollowMouse(false)

    return () => {
      viewer?.stopAnimation()
    }
  })
</script>

<div class="pt-1" bind:this="{container}" id="logo-container"></div>
