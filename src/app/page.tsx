"use client"
import {
  ConnectButton,
  DisconnectButton,
  ShowUIButton,
  SignMessage,
  WalletDetail
} from "../app/components/index"
import { useUser } from "../app/context/UserContext"

export default function Home() {
  const { user } = useUser()
  return (
    <main>
      {user ?
        <div className="p-2 flex flex-col w-[40vw] mx-auto">
          <WalletDetail />
          <ShowUIButton />
          <SignMessage />
          <DisconnectButton />
        </div>
        :
        <div className="p-2">
          <ConnectButton />
        </div>
      }
    </main>
  )
}
