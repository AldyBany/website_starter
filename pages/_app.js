
import '../styles/globals.css'
import MainLayout from '../components/layouts/main/mainLayout'

function MyApp({ Component, pageProps }) {
  return(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  ) 
}

export default MyApp
