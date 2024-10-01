import './Main_Second_First_Cont.scss'
import { IoIosSearch } from "react-icons/io";
const MainSecondFirstCont=()=>{
    return(
        <div className='Main_Second_First_Cont'>
          <div className='Main_Second_First_Cont_Child'>
            <div  className='Main_Second_First_Cont_Child_Icon'><IoIosSearch /></div>
            <input  className='Main_Second_First_Cont_Child_Input'placeholder='Search'></input>
          </div>
        </div>
    )
}
export default MainSecondFirstCont;