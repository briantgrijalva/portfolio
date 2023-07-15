import RootLayout from "./layout";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import es from "../lang/es.json";
import en from "../lang/en.json";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'


const messages: any = {
  en,
  es,
};


export default function MyApp({ Component, pageProps }:any) {

  const { locale } = useRouter();

  const localVal: any = locale != null ? 
  messages[locale] : null

  return (

    <IntlProvider locale={locale!} messages={localVal}>
      <RootLayout>
        <Component {...pageProps}/>
      </RootLayout>
    </IntlProvider>
    
  )
}