import { Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from './layout/Layout.tsx';
import Indexroute from './route/Indexroute.tsx';



function App() {

// xs:text-[...], sm:text-[...], md:text-[...], lg:text-[...], xl:text-[...], xxl:text-[...], 3xl:text-[...]
// xs:p-4, sm:p-4, md:p-4, ... 와 같이 다양한 조합으로 사용됨
// text-main, text-sub_ivory, text-sub_apricot, ...
// bg-main, bg-sub_ivory, bg-sub_apricot, ...
// border-gray_1, border-gray_2, ...




  return (
   <Layout className='font-suit'> 
    <Routes>
        <Route path="/" element={<Indexroute></Indexroute>}>
        </Route>
    </Routes>  
    
    </Layout>
  )
}

export default App
