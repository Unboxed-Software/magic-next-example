import { Magic } from "magic-sdk"

// Initialize the Magic instance
export let magic: Magic | undefined

if (typeof window !== 'undefined') {
  magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_API_KEY || "", {
    network: {
      rpcUrl: "https://rpc2.sepolia.org/",
      chainId: 11155111,
    },
  })
}