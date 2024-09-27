import './Main.scss'
import MainFirstCont from './Main_First_Cont/Main_First_Cont';
import MainFourthCont from './Main_Fourth_Cont/Main_Fourth_Cont';
import MainSecondCont from './Main_Second_Cont/Main_Second_Cont';
import MainThirdCont from './Main_Third_Cont/Main_Third_Cont';

const MainContant=()=>{
    return(
        <main className="mainbar">
<div className="Main_First_Cont">
    <MainFirstCont/>
    <MainSecondCont/>
    <MainThirdCont/>
    <MainFourthCont/>
</div>
<div  className="Main_Second_Cont_">
    Main_Second_Cont
</div>
        </main>
    )
}
export default MainContant;