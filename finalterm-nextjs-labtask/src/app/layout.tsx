import Header from "../components/header";
import Footer from "../components/footer";
import './layout.css'; // import the CSS file

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
        <header>
          <Header/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}