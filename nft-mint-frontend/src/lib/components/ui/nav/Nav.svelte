<script>
  import Separator from '../separator/separator.svelte'
  import ThemeToggle from '../themeToggle/ThemeToggle.svelte'
  import WalletConnect from '../wallet/WalletConnect.svelte'
  import Logo from './Logo.svelte'
</script>

<div class="flex flex-row items-center justify-between">
  <div class="flex flex-row items-center">
    <Logo />
    <div class="ml-5">
      <a href="/">
        <h4 class="scroll-m-20 text-xl font-normal tracking-tight">Home</h4></a
      >
    </div>
  </div>

  <div class="flex flex-row items-center">
    <WalletConnect />
    <ThemeToggle />
  </div>
</div>
<Separator />
