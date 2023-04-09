import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import RootLayout from "./layout";


export default function MyApp({ Component, pageProps }:any) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}