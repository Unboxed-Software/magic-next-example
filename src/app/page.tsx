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
    <main className="flex flex-col gap-10">
      {user ?
        <div>
          <WalletDetail />
          <ShowUIButton />
          <DisconnectButton />
          <SignMessage />
        </div>
        :
        <div>
          <ConnectButton />
        </div>
      }
    </main>
  )
}
