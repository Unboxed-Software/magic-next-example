"use client"
import {
  ConnectButton,
  DisconnectButton,
  ShowUIButton,
  SignMessage,
  WalletDetail,
} from "../app/components/index"
import { useUser } from "./context/UserContext"
import SendTransaction from "./components/SendTransaction"

export default function Home() {
  const { user } = useUser()
  return (
    <main>
      {user ? (
        <div className="p-2 flex flex-col w-[40vw] mx-auto">
          <WalletDetail />
          <ShowUIButton />
          <SendTransaction />
          <SignMessage />
          <DisconnectButton />
        </div>
      ) : (
        <div className="p-2 text-center">
          <ConnectButton />
        </div>
      )}
    </main>
  )
}
