import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageSquareCheck } from "react-icons/bi";
import { BsSlashSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineGroup } from "react-icons/md";
import { BsLightning } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { RiMoreLine } from "react-icons/ri";
import './sidebar-options.scss'

import {Link} from "react-router-dom"
const sideBarOptions={
    Header:"option",
    Data:
[
    // {
    //     id:"1",
    //     label:"",
    //     icon:,
    // },
   
    {
        id:"2",
        label:"Home",
        icon:<GoHomeFill />,
        link:""
    },
    {
        id:"3",
        label:"Explore",
        icon:<IoSearchOutline />,
        link:"explore"
    },
    {
        id:"4",
        label:"Notifications",
        icon:<IoMdNotificationsOutline />,
        link:"/notifications"
    },
    {
        id:"5",
        label:"Messages",
        icon:<BiMessageSquareCheck />,
        link:"/messages"

    },
    {
        id:"6",
        label:"Grok",
        icon:<BsSlashSquare className="Square" />, 
        
    },
    {
        id:"7",
        label:"Bookmarks",
        icon:<CiBookmark />, 
    },
    {
        id:"8",
        label:"Jobs",
        icon:<IoBagRemoveOutline />, 
    },
    {
        id:"9",
        label:"Communities",
        icon:<MdOutlineGroup />
        , 
    },
    {
        id:"10",
        label:"Premium",
        icon:<FaXTwitter/>, 
    },
    {
        id:"10",
        label:"Verified Orgs",
        icon:<BsLightning />, 
    },
    {
        id:"10",
        label:"Profile",
        icon:<CiUser />, 
    },
    {
        id:"10",
        label:"More",
        icon:<CiCircleMore />
        , 
    },
]
}
const SideBarData=()=>{
    return(
        <div className="SideBar_First_Cont">
            <div className="Twitter_Icon"><FaXTwitter/></div>
    {sideBarOptions.Data.map((ele)=>{
        return(
            <div key={ele.id} className="SideBar_Child_Cont"> 
            <button className="SideBar_Options_Button">
                <Link to={ele.link} id={ele.id} className="SideBar_Button_Cont">
            <div className="SideBar_Icon_Cont"> {ele.icon}  </div>
            <div className="SideBar_label_Cont"> {ele.label}  </div>
            </Link>
            </button>
            </div>
        )
    })}
    <div className="Button_Post_Cont">
<button className="Post_Button">Post</button>
    </div>
    <button className="User_Button">
   <div className="User_Cont_1">
    <img className="User_Image" src="https://pbs.twimg.com/profile_images/1735872441732489216/x_YJBkPj_400x400.jpg" alt="User_Icon"/>
   </div>
   <div className="User_Cont_2">
    <span className="User_2_Span_1">manish yadav</span>
    <span className="User_2_Span_2">@manishy99375601</span>
   </div>
   <span className="User_Cont_3"><RiMoreLine/></span>
    </button>
        </div>
    )
}
export default SideBarData;