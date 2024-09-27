import { GoFileMedia } from "react-icons/go";
import { RiFileGifLine } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import './Main_Second_Cont.scss'
const MainSecondCont=()=>{
    return(
        <div className="Main_Second_Cont">
<div className="Main_Second_Cont_Image_Cont">
<div className="Main_Second_Cont_Image_Child_Cont">
<img className="Main_Second_Cont_Image_Child_Cont_Img" src="https://pbs.twimg.com/profile_images/1735872441732489216/x_YJBkPj_400x400.jpg" alt="User_Post" ></img>
</div>
</div>
<div className="Main_Second_Cont_Primary_Cont">
<div className="Main_Second_Cont_Primary_First_Cont">
    <input className="Main_Second_Cont_Primary_First_Cont_Child_Cont" placeholder="What is happening?!" >
    </input>
</div>
<div className="Main_Second_Cont_Primary_Second_Cont">
    <div className="Main_Second_Cont_Primary_Second_Child_Cont">
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><GoFileMedia /></div>
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><RiFileGifLine /></div>
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><CgOptions /></div>
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><HiOutlineEmojiHappy /></div>
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><RiCalendarScheduleLine /></div>
<div className="Main_Second_Cont_Primary_Second_Child_Emoji_Cont"><HiOutlineLocationMarker /></div>
    </div>
    <div className="Main_Second_Cont_Primary_Second_Child_Button_Cont">
        <button className="Main_Second_Cont_Primary_Second_Child_Button_Cont_button">Post</button>
    </div>
</div>
</div>

        </div>
    )
}
export default MainSecondCont;