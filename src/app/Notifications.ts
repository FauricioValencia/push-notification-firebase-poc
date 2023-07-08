import React, { useState, useEffect } from "react"
import { getTokenFirebase } from "./firebaseInit"

const Notifications = () => {
  const [isTokenFound, setTokenFound] = useState(false)

  console.log("Token found", isTokenFound)

  // To load once
  useEffect(() => {
    let data

    async function tokenFunc() {
      data = await getTokenFirebase(setTokenFound)
      if (data) {
        console.log("Token is", data)
      }
      return data
    }

    tokenFunc()
  }, [setTokenFound])
}

export default Notifications
