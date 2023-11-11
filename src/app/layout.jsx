import Navbar from "../components/Navbar"
import "./index.css"

export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
            {children}
        </body>
      </html>
    )
}

