<script lang="ts">
  import { walletAddress } from '$lib/stores/wallet'
  import Separator from '../separator/separator.svelte'
  import ThemeToggle from '../themeToggle/ThemeToggle.svelte'
  import WalletConnect from '../wallet/WalletConnect.svelte'
  import Logo from './Logo.svelte'
  import NavLink from './NavLink.svelte'

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Collections', href: '/collections', requiresWallet: true },
  ]

  let showNavMenu: boolean = true

  const toggleNavMenu = () => {
    showNavMenu = !showNavMenu
  }
</script>

<div class="flex flex-row items-center justify-between h-12 md:h-20">
  <div class="flex flex-row items-center">
    <Logo />
    <div class=" md:ml-5 flex flex-row">
      {#each navItems as item}
        <NavLink
          label="{item.label}"
          href="{item.href}"
          isEnabled="{!item.requiresWallet || !!$walletAddress}"
        />
      {/each}
    </div>
  </div>

  <div class="flex flex-row items-center">
    <WalletConnect />
    <ThemeToggle />
  </div>
</div>
<Separator />
