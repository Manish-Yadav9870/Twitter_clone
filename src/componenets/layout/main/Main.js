import { Link, Route, Routes } from 'react-router-dom';
import HomeData from '../pages/Home/Home';
import './Main.scss'
import MainSecondThirdCont from './Main_Second_Third_Cont/Main_Second_Third_Cont';
import ForYou from '../pages/ForYou/ForYou';
import FollowingData from '../pages/Following1/FollowIng';
import ExploreContant from '../pages/Explore/Explore';



const MainContant = () => {
    return (
        <main className="mainbar">
            <div className="Main_First_Cont">   
                <Routes>
                    <Route path='/'  element={<HomeData/>}>
                        <Route path='ForYou' element={<ForYou />} />
                        <Route path='Following' element={<FollowingData />} />
                        <Route path='' element={<ForYou />} />
                    </Route>
                    <Route path='explore' element={< ExploreContant/>} />
                </Routes>

            </div>
            <div className="Main_Second_Cont_">
                {/* <MainSecondFirstCont/> */}
                {/* <MainSecondSecondCont/>*/}
                <MainSecondThirdCont />
            </div>
        </main>
    )
}
export default MainContant;