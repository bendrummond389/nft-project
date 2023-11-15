<script lang="ts">
  import type { ERC721Token } from '$lib/types'
  import * as Card from '$lib/components/ui/card'
  import { Separator } from '../ui/separator'
  import { Label } from '../ui/label'
  import { Input } from '../ui/input'
  import { Button } from '../ui/button'

  let imageFile: File | null = null
  let recipientAddress: string = ''
  let nftName: string = ''
  let nftDescription: string = ''

  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files?.length) {
      imageFile = input.files[0]
    }
  }

  const handleAddressChange = (event: Event) => {
    recipientAddress = (event.target as HTMLInputElement).value
  }

  const handleNameChange = (event: Event) => {
    nftName = (event.target as HTMLInputElement).value
  }

  const handleDescriptionChange = (event: Event) => {
    nftDescription = (event.target as HTMLInputElement).value
  }

  const uploadImagetoPinata = async () => {
    if (!imageFile || !nftName || !nftDescription) {
      console.error('Please provide all required fields')
      return
    }

    const data = new FormData()
    data.append('file', imageFile)
    data.append('name', nftName)
    data.append('description', nftDescription)
    data.append('recipient_address', recipientAddress)

    try {
      const response = await fetch('/api/ipfs', {
        method: 'POST',
        body: data,
      })
      if (!response.ok) {
        throw new Error('Failed to upload image and metadata')
      }
      const result = await response.json()
      console.log(result)
      // Handle the successful response, e.g., minting the NFT
    } catch (error) {
      console.error('Error:', error)
    }
  }
</script>

<Card.Root class="w-1/3">
  <Card.Header>
    <Card.Title>Mint new NFT to this collection</Card.Title>
    <Card.Description>
      Here you can add a new NFT to this collection.
    </Card.Description>
    <Separator />
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="recipient_address">Recipient Address</Label>
          <Input
            id="recipient_address"
            placeholder="Address"
            on:input="{handleAddressChange}"
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="nft_name">NFT Name</Label>
          <Input
            id="nft_name"
            placeholder="Name"
            on:input="{handleNameChange}"
          />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="nft_description">NFT Description</Label>
          <Input
            id="nft_description"
            placeholder="Description"
            on:input="{handleDescriptionChange}"
          />
        </div>
        <label for="imageInput">Select Image</label>
        <Input
          type="file"
          id="imageInput"
          accept="image/*"
          on:change="{handleFileChange}"
        />
        <Button
          disabled="{!imageFile || !nftName || !nftDescription}"
          on:click="{uploadImagetoPinata}"
          class="mt-3 w-1/2 mx-auto"
        >
          Mint
        </Button>
      </div>
    </form>
  </Card.Content>
</Card.Root>
