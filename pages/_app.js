import 'semantic-ui-css/semantic.min.css'
import 'suneditor/dist/css/suneditor.min.css';
import '../styles/globals.css'
import 'react-quill/dist/quill.snow.css'
import 'antd/dist/antd.css';


import {Provider} from "next-auth/client"

function MyApp({ Component, pageProps }) {

  return (
    <Provider session={pageProps.session} >
      <Component {...pageProps} />

    </Provider>

  )

}

export default MyApp
