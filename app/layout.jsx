import "./globals.css"
import { Open_Sans } from "next/font/google"

import Nav from "./(components)/Nav"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Ticket System",
  description: "Creating a functional ticketing system.",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Nav />
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
