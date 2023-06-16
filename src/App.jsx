import { Suspense } from 'react'
import Spinner from './components/Spinner'
import RouteManager from './utils/setup'

function App() {

  return (
    <>
     <Suspense fallback={<Spinner full/>}>
        <RouteManager/>
     </Suspense>
    </>
  )
}

export default App
