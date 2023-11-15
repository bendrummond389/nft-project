import { json } from '@sveltejs/kit'
import fetch from 'node-fetch'

// Environment variables for Pinata API
const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY || ''
const pinataSecretApiKey = import.meta.env.VITE_PINATA_SECRET_API_KEY || ''

export async function POST(event) {
  const data = await event.request.formData()
  const file = data.get('file')
  const nftName = data.get('name')
  const description = data.get('description')
  const recipientAddress = data.get('recipient_address')

  if (file && typeof file !== 'string') {
    const formData = new FormData()
    formData.append('file', file)

    try {
      const pinataResponse = await fetch(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        {
          method: 'POST',
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
          body: formData,
        }
      )

      if (!pinataResponse.ok) {
        const errorBody = await pinataResponse.text()
        console.error('Pinata API Error:', errorBody)
        throw new Error(
          `Failed to upload to Pinata: ${pinataResponse.statusText}`
        )
      }

      const pinataData: any = await pinataResponse.json()

      return json({ success: true, ipfsHash: pinataData.IpfsHash })
    } catch (error: any) {
      console.error('Error:', error)
      return json({ success: false, error: error.message }, { status: 500 })
    }
  } else {
    return json({ success: false, error: 'No file uploaded' }, { status: 400 })
  }
}
