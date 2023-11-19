<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import { Separator } from '../ui/separator'
  import * as Accordion from '$lib/components/ui/accordion'
</script>

<Card.Root class=" mt-12">
  <Card.Header>
    <Card.Title><h1 class="text-3xl md:text-5xl">Welcome To Theta</h1></Card.Title>
    <Card.Description>
      <h3 class="text-lg md:text-xl">
        Empowering Creators with Custom NFT Collections and Minting — Own Your
        Digital Universe
      </h3>
    </Card.Description>
    <Separator />
  </Card.Header>
  <Card.Content>
    <h1 class="text-2xl md:text-3xl">FAQ</h1>
    <Accordion.Root>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is Theta?</Accordion.Trigger>
        <Accordion.Content>
          Theta is an NFT platform that aims to make minting NFTs more
          accessible while also providing ownership of the collections.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger
          >How do I create my own NFT collection?</Accordion.Trigger
        >
        <Accordion.Content>
          To create an collection you just need to connect a MetaMask wallet and
          head to the collections page can click the + icon.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger
          >What are the benefits of owning my NFT contract?</Accordion.Trigger
        >
        <Accordion.Content>
          <ul>
            <li>
              <strong>Full Control:</strong> Complete control over the rules for
              minting, transferring, and burning tokens in your collection.
            </li>
            <li>
              <strong>Customization:</strong> Ability to tailor the contract to the
              specific needs of your collection, like unique properties or royalty
              structures.
            </li>
            <li>
              <strong>Direct Earnings:</strong> All earnings from sales or secondary
              transactions are directly yours, without intermediaries.
            </li>
            <li>
              <strong>Credibility and Trust:</strong> Owning your contract adds credibility,
              as collectors often prefer transparent and unique contracts.
            </li>
            <li>
              <strong>Community Building:</strong> Direct engagement with your community
              by implementing features that resonate with them.
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4">
        <Accordion.Trigger
          >Are there any fees associated with creating a collection or minting
          NFTs?</Accordion.Trigger
        >
        <Accordion.Content>
          <h3 class="mb-2 text-lg">
            Yes, fees are involved, primarily as gas fees on the blockchain:
          </h3>
          <ul>
            <li>
              <strong>Contract Deployment Fee:</strong> Gas fee for deploying your
              NFT contract, varying based on network congestion and contract complexity.
            </li>
            <li>
              <strong>Minting Fee:</strong> Gas fee incurred each time an NFT is
              minted, paid to the network for computational resources used.
            </li>
            <li>
              <strong>Transaction Fees for Secondary Sales:</strong> Gas fees for
              transactions involving secondary sales or transfers.
            </li>
            <li>
              <strong>Variable Costs:</strong> Gas fees are variable and dependent
              on network demand. Check current gas prices for accurate estimates.
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </Card.Content>
</Card.Root>
