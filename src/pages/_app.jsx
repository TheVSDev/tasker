import "@/web/styles/globals.css"
import HeadPage from "@/web/components/HeadPage"
import Footer from "@/web/components/Footer"

const App = ({ Component, pageProps }) => (
  <>
    <HeadPage />
    <Component {...pageProps} />
    <Footer />
  </>
)

export default App
