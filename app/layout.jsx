
import './globals.css'


export const metadata = {
  title: 'Entrust Shipping',
  description: 'Home Page of Entrust Shipping.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body >{children}</body>
    </html>
  )
}
