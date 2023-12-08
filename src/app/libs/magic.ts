import { Magic } from "magic-sdk"

// Initialize the Magic instance
export let magic: Magic | undefined

if (typeof window !== 'undefined') {
  // Add rpcURL to the Content Security Policy if not whitelisted
  // https://magic.link/docs/wallets/security/content-security-policy
  magic = new Magic(process.env.API_KEY || "", {
    network: {
      rpcUrl: "https://rpc2.sepolia.org/",
      chainId: 11155111,
    },
  })
}