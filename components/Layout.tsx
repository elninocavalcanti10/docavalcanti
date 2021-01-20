import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
