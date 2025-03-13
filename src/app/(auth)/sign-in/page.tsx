'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-center flex flex-col items-center justify-center h-screen">
           <h2 className="text-2xl font-bold mb-4 p-4">Signed in as {session.user.email}</h2> <br />
        <button type="button" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300 ease-in-out" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
     <h2 className="text-2xl font-bold mb-4 p-4"> Not signed in </h2><br />
      <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300 ease-in-out" type="button" onClick={() => signIn()}>Sign in</button>
    </div>
  )
}