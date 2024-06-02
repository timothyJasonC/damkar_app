import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function HomePage() {
  const {user} = useContext(UserContext)
  console.log(user);
  return (
    <div>
      Home
    </div>
  )
}
