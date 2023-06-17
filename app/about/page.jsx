import React from "react"

const AboutPage = () => {
  return (
    <div className="px-2 container mx-auto lg:px-0">
      <h1 className="font-bold text-3xl mt-6">About this App</h1>
      <p className="font-medium text-lg mt-4">
        This app made by burakhan ünver to learn new Next.js features and tailwind
      </p>
      <p className="font-medium text-lg">
        You can check my github from{" "}
        <a href="https://github.com/brkunver" className="text-blue-600 hover:underline">
          Here!
        </a>
      </p>
    </div>
  )
}

export default AboutPage
