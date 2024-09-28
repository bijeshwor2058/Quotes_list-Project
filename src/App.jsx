import { useEffect } from 'react'
import Header from './common/Header'
import Quote from './Quote_Container/Quote'
import quote from './Quote_Container/quote-list.json'
// import Main_container from './Main_container/Main_container'
import Footer from './Footer/Footer'


function App() {
  return (
    <>
    <Header />
    {/* <Main_container /> */}
      <Quote />
    <Footer/>
    </>
  )
}
export default App
