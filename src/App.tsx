import { Routes, Route } from 'react-router-dom'

import './App.css'

import Layout from './layout/Layout.tsx';
import Indexroute from './route/Indexroute.tsx';

import Brand from './pages/Brand.tsx';
import Confirmation from './pages/Confirmation.tsx'
import List from './pages/List.tsx';
import Login from './pages/Login.tsx'
import Only from './pages/Only.tsx';
import Pay from './pages/Pay.tsx'
import Promotion from './pages/Promotion.tsx'
import Reservation from './pages/Reservation.tsx';
import View from './pages/View.tsx';
import CampgroundForm from './route/CampgroundForm.tsx';



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

        <Route path="/list" element={<List></List>}>
        </Route>
        <Route path="/onlyhere" element={<Only></Only>}>
        </Route>
        <Route path="/promotion" element={<Promotion></Promotion>}>
        </Route>
        <Route path="/brand" element={<Brand></Brand>}>
        </Route>

        <Route path="/confirmation" element={<Confirmation></Confirmation>}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/pay" element={<Pay></Pay>}>
        </Route>
        <Route path="/reservation" element={<Reservation></Reservation>}>
        </Route>
        <Route path="/view" element={<View></View>}>
        </Route>
        <Route path="/promotion" element={<p style={{height:"100vh"}}>빨랑해</p>}>
        </Route>
        <Route path="/user/register" element={<CampgroundForm></CampgroundForm>}>
        </Route>
        <Route path="*" element={<p style={{height:"100vh"}}>주소 잘 못쳤지 </p>}>
        </Route>
    </Routes>
    </Layout>
  )
}

export default App
