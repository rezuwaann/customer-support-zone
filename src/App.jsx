import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Issues from './components/Issues/Issues'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';


const dataPromise = fetch('/data.json')
  .then(res => res.json())




function App() {

  const [added, setAdded] = useState([]);
  const [resolved, setResolved] = useState([]);

  const completed = (rmv) => {
    const filtered = added.filter(issue => issue.id !== rmv.id);
    setAdded(filtered)
    setResolved([...resolved, rmv])
    
    


  }
  return (
    <div className='bg-gray-100'>

      <Navbar></Navbar>


      <Banner added={added} resolved={resolved}></Banner>
      <Suspense fallback={<h2>loading data...</h2>}>
        <Issues dataPromise={dataPromise} resolved={resolved} completed={completed} added={added} setAdded={setAdded}></Issues>
      </Suspense>

      <Footer ></Footer>
<ToastContainer/>
    </div>

  )
}

export default App
