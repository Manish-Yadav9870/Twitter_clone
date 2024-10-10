import './Home.scss'
import { GoFileMedia } from "react-icons/go";
import { RiFileGifLine } from "react-icons/ri";
import { CgOptions } from "react-icons/cg";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { SlOptions } from "react-icons/sl";
import { LuMessageCircle } from "react-icons/lu";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { RxShare2 } from "react-icons/rx";
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import ForYou from '../ForYou/ForYou';
import FollowingData from '../Following1/FollowIng';
const MainFourthContData = {
    Data: [
        {
            id: "1",
            iconpic: "https://yt3.googleusercontent.com/ytc/AIdro_kH49tu60yDcv5V7IlieGajpIV6_B53q1OMcju5sj_lKUw=s900-c-k-c0x00ffffff-no-rj",
            label: "ZEE Rajasthan",
            icon1: <MdVerified />,
            roll: "@ZEErajasthanNews . 3h",
            icon2: <SlOptions />,
            label2: <a>#jaipur</a>,
            label3: "शिक्षा मंत्री मदन दिलावर जयपुर में ",
            contant: "सरकारी निवास पर आए लोगों की सुन रहे समस्याएं, शारीरिक रूप से अक्षम 2 शिक्षकों ने दिलावर से की मुलाक़ात, मेडिकल प्रमाण पत्र के आधार पर दोनों शिक्षकों को मिला इच्छित स्थान पर तबादला, मंत्री ने जनसुनवाई के दौरान ही तबादले के निर्देश किए",
            label4: <a>show more</a>,
            pic: "https://pbs.twimg.com/media/GYN9HVvWEAA6i18?format=jpg&name=medium",
            icon3: <LuMessageCircle />,
            icon4: <BiRepost />,
            icon5: <FaRegHeart />,
            icon6: <BiBarChart />,
            icon7: <CiBookmark />,
            icon8: <RxShare2 />,
        },
        {
            id: "1",
            iconpic: "https://yt3.googleusercontent.com/ytc/AIdro_kH49tu60yDcv5V7IlieGajpIV6_B53q1OMcju5sj_lKUw=s900-c-k-c0x00ffffff-no-rj",
            label: "ZEE Rajasthan",
            icon1: <MdVerified />,
            roll: "@ZEErajasthanNews . 3h",
            icon2: <SlOptions />,
            label2: <a>#jaipur</a>,
            label3: "शिक्षा मंत्री मदन दिलावर जयपुर में ",
            contant: "सरकारी निवास पर आए लोगों की सुन रहे समस्याएं, शारीरिक रूप से अक्षम 2 शिक्षकों ने दिलावर से की मुलाक़ात, मेडिकल प्रमाण पत्र के आधार पर दोनों शिक्षकों को मिला इच्छित स्थान पर तबादला, मंत्री ने जनसुनवाई के दौरान ही तबादले के निर्देश किए",
            label4: <a>show more</a>,
            pic: "https://pbs.twimg.com/media/GYN9HVvWEAA6i18?format=jpg&name=medium",
            icon3: <LuMessageCircle />,
            icon4: <BiRepost />,
            icon5: <FaRegHeart />,
            icon6: <BiBarChart />,
            icon7: <CiBookmark />,
            icon8: <RxShare2 />,
        },
        {
            id: "1",
            iconpic: "https://yt3.googleusercontent.com/ytc/AIdro_kH49tu60yDcv5V7IlieGajpIV6_B53q1OMcju5sj_lKUw=s900-c-k-c0x00ffffff-no-rj",
            label: "ZEE Rajasthan",
            icon1: <MdVerified />,
            roll: "@ZEErajasthanNews . 3h",
            icon2: <SlOptions />,
            label2: <a>#jaipur</a>,
            label3: "शिक्षा मंत्री मदन दिलावर जयपुर में ",
            contant: "सरकारी निवास पर आए लोगों की सुन रहे समस्याएं, शारीरिक रूप से अक्षम 2 शिक्षकों ने दिलावर से की मुलाक़ात, मेडिकल प्रमाण पत्र के आधार पर दोनों शिक्षकों को मिला इच्छित स्थान पर तबादला, मंत्री ने जनसुनवाई के दौरान ही तबादले के निर्देश किए",
            label4: <a>show more</a>,
            pic: "https://pbs.twimg.com/media/GYN9HVvWEAA6i18?format=jpg&name=medium",
            icon3: <LuMessageCircle />,
            icon4: <BiRepost />,
            icon5: <FaRegHeart />,
            icon6: <BiBarChart />,
            icon7: <CiBookmark />,
            icon8: <RxShare2 />,
        },
        {
            id: "1",
            iconpic: "https://yt3.googleusercontent.com/ytc/AIdro_kH49tu60yDcv5V7IlieGajpIV6_B53q1OMcju5sj_lKUw=s900-c-k-c0x00ffffff-no-rj",
            label: "ZEE Rajasthan",
            icon1: <MdVerified />,
            roll: "@ZEErajasthanNews . 3h",
            icon2: <SlOptions />,
            label2: <a>#jaipur</a>,
            label3: "शिक्षा मंत्री मदन दिलावर जयपुर में ",
            contant: "सरकारी निवास पर आए लोगों की सुन रहे समस्याएं, शारीरिक रूप से अक्षम 2 शिक्षकों ने दिलावर से की मुलाक़ात, मेडिकल प्रमाण पत्र के आधार पर दोनों शिक्षकों को मिला इच्छित स्थान पर तबादला, मंत्री ने जनसुनवाई के दौरान ही तबादले के निर्देश किए",
            label4: <a>show more</a>,
            pic: "https://pbs.twimg.com/media/GYN9HVvWEAA6i18?format=jpg&name=medium",
            icon3: <LuMessageCircle />,
            icon4: <BiRepost />,
            icon5: <FaRegHeart />,
            icon6: <BiBarChart />,
            icon7: <CiBookmark />,
            icon8: <RxShare2 />,
        }
    ]
}

const HomeData = () => {
    return (
        <div className="home">


            <div className="Main_First_Cont_Nav">
                <div className="Main_First_Cont_Nav_1">
                    <Link to={"/ForYou"} className="Main_First_Cont_1_Child1"  >For you</Link>
                </div>
                <div className="Main_First_Cont_Nav_2">
                    <Link to="/Following" className="Main_First_Cont_1_Child2">Following</Link>
                </div>
            </div>
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
                    {/* ---------------------------------------------second cont start-------------------------------------------------- */}
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

            {/* =--------------------------------------------------------------third------------------------------------ */}
            <div className="Main_Third_Cont">
                <div className="Main_Third_Child_Cont">
                    Show 335 posts
                </div>

            </div>

           <Outlet/>

        </div>
    )
}
export default HomeData;