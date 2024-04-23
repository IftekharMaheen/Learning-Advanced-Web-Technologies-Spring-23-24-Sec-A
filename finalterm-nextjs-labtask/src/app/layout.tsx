import Header from "../components/header";

export const metadata = {
    title: 'Employee Portal',
    description: 'Powered by Next.js',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <header style={{backgroundColor: "lightgreen", padding: "5px"}}>
          <Header/>
          </header>
          {children}
          <footer style={{backgroundColor: "lightgray", padding: "5px"}}>Footer</footer>
        </body>
        
      </html>
    )
  }