import './Main.scss'
import MainFirstCont from './Main_First_Cont/Main_First_Cont';

const MainContant=()=>{
    return(
        <main className="mainbar">
<div className="Main_First_Cont">
    <MainFirstCont/>
</div>
<div  className="Main_Second_Cont">
    Main_Second_Cont
</div>
        </main>
    )
}
export default MainContant;