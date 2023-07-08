"use client"
import { useState } from "react"
import Notifications from "./Notifications"
import ReactNotificationComponent from "./ReactNotification"
import { onMessageListener } from "./firebaseInit"

export default function Home() {
  const [show, setShow] = useState(false)
  const [notification, setNotification] = useState({ title: "", body: "" })

  console.log(show, notification)

  onMessageListener()
    .then((payload: any) => {
      setShow(true)
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      })
      console.log(payload)
    })
    .catch(err => console.log("failed: ", err))

  Notifications()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>poc push notifications firebase could message</h1>
      {show ? (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      ) : (
        <></>
      )}
    </main>
  )
}
