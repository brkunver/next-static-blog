import "./globals.css"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Next Static Blog",
  description: "Nextjs Static Blog app",
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
