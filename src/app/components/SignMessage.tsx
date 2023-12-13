import { useState } from "react"
import { useWeb3 } from "../context/Web3Context"
import { useUser } from "../context/UserContext"

const SignMessage = () => {
  // Use the Web3Context to get the current instance of web3
  const { web3 } = useWeb3()
  // Use the UserContext to get the current logged-in user
  const { user } = useUser()

  // Initialize state for message and signature
  const [message, setMessage] = useState("")
  const [signature, setSignature] = useState("")

  // Define the handler for input change, it updates the message state with input value
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessage(e.target.value)

  // Define the signMessage function which is used to sign the message
  const handleSignMessage = async () => {
    if (user && web3) {
      try {
        // Sign the message using the connected wallet
        const signedMessage = await web3.eth.personal.sign(message, user, "")
        // Set the signature state with the signed message
        setSignature(signedMessage)
        // Do something with the signature
      } catch (error) {
        // Log any errors that occur during the signing process
        console.error("handleSignMessage:", error)
      }
    }
  }

  // Render the component
  return (
    <div className="py-2 flex flex-col gap-2">
      <input className="text-black" type="text" onChange={handleInput} maxLength={20} placeholder="Set Message" />
      <button type="button" className="border border-white font-bold p-2 rounded-md" onClick={handleSignMessage}>Sign Message</button>
      {signature && <div className="w-[20vw] break-words mx-auto text-center">{`Signature: ${signature}`}</div>}
    </div>
  )
}

export default SignMessage