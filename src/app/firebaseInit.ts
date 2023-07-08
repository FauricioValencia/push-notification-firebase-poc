import firebase, { initializeApp } from "firebase/app"
import "firebase/messaging"
import { getMessaging, getToken, onMessage } from "firebase/messaging"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

}

const initializeAppFirebase = initializeApp(firebaseConfig)

const messaging = getMessaging(initializeAppFirebase)

export const getTokenFirebase = async (setTokenFound: any) => {
  let currentToken = ""

  try {
    currentToken = await getToken(messaging, {
      vapidKey:
        "",
    })
    if (currentToken) {
      setTokenFound(true)
    } else {
      setTokenFound(false)
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error)
  }

  return currentToken
}

export const onMessageListener = () =>
  new Promise(resolve => {
    onMessage(messaging, (payload: any) => {
      resolve(payload)
    })
  })
