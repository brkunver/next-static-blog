"use client"

import { useState } from "react"
import axios from "axios"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [nameRes, setNameRes] = useState("")
  const [emailRes, setEmailRes] = useState("")
  const [messageRes, setMessageRes] = useState("")

  const [showResponseMenu, setShowResponseMenu] = useState(false)
  const [error, setError] = useState(false)

  async function onSubmitHandler(event) {
    event.preventDefault()

    try {
      const res = await axios.post("/api/contact", {
        name,
        email,
        message,
      })
      if (res.status == 200) {
        setNameRes(res.data.name)
        setEmailRes(res.data.email)
        setMessageRes(res.data.message)
        setShowResponseMenu(true)
        setError(false)
      }
    } catch (error) {
      setShowResponseMenu(false)
      setError(true)
    }
  }

  return (
    <div className="px-4 container mx-auto lg:px-0 lg:w-1/3 lg:mt-6">
      {error && (
        <div className="w-full mt-6">
          <h2 className="text-2xl font-semibold">An Error Occured!</h2>
        </div>
      )}
      {showResponseMenu && (
        <div className="mt-6 w-full">
          <h2 className="text-2xl font-semibold">Your Message Succesfully send!</h2>
          <h3 className="font-semibold text-2xl">Your name :</h3>
          <p className="text-ellipsis overflow-hidden font-medium text-base">{nameRes}</p>
          <h3 className="font-semibold text-2xl">Your email :</h3>
          <p className="text-ellipsis overflow-hidden font-medium text-base">{emailRes}</p>
          <h3 className="font-semibold text-2xl">Your Message</h3>
          <p className="text-ellipsis overflow-hidden">{messageRes}</p>
        </div>
      )}

      <h1 className="font-bold text-2xl space-y-4 text-center mt-4">Contact</h1>
      <form onSubmit={onSubmitHandler} action="/api/contact" method="post" className="flex-col flex mt-4">
        <label className="font-bold text-base mb-1 lg:w-1/2" htmlFor="name">
          Name :
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-blue-800 rounded-lg py-1 px-2"
          type="text"
          name="name"
          id="name"
          maxLength={100}
        />
        <br />
        <label className="font-bold text-base mb-1" htmlFor="name">
          Email :
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border border-blue-800 rounded-lg py-1 px-2"
          type="email"
          name="email"
          id="email"
          value={email}
          maxLength={100}
        />
        <br />
        <label className="font-bold text-base mb-1" htmlFor="message">
          Your message :
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          id="message"
          className="border border-blue-800 rounded-lg py-1 px-2"
          maxLength={255}
        ></textarea>
        <button
          className="font-semibold text-base rounded-lg bg-blue-700 w-1/3 text-white px-4 py-1 mt-4 self-center lg:w-1/5 hover:bg-blue-800"
          type="submit"
        >
          Send
        </button>
      </form>
      <h3 className="text-xl font-medium mt-2 text-center">About this contact form</h3>
      <p className="text-base font-medium">
        This contact form is created to test Next.js API routes. It does not save your messages to any database. After
        sending the request to the server, it will show you the response above.
      </p>
    </div>
  )
}

export default ContactPage
