import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import './Explore.scss'
const ExploreData = {
    "explore": [
        {
            id: 1,
            name: "Sports · Trending",
            hashTag: "#HarmanpreetKaur",
            posts: "1,799 posts",
            video: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1681899010_Khatu_Shyam_Reel_1_(1).mp4"
        },
        {
            id: 2,
            name: "Trending in India",
            hashTag: "लॉरेंस बिश्नोई",
            posts: "77.8K posts",
            video: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1680340212_Khatu_Shyam_Reel_2_(2).mp4"
        },
        {
            id: 3,
            name: "Entertainment · Trending",
            hashTag: "#OviyaLeaked",
            posts: "36.7K posts",
            video: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1684417800_dgyt.mp4"
        },
        {
            id: 4,
            name: "Trending in India",
            hashTag: "दाऊद इब्राहिम",
            posts: "8,227 posts",
            video: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1681906781_Khatu_Shyam_Reel1.mp4"
        },
        {
            id: 5,
            name: "Trending in India",
            hashTag: "#VickyVidyaKaWohWalaVideo",
            posts: "8,227 posts",
            video: "https://www.bhajansangrah.in/apps/krishna/uploads/videos/1679921522_Khatu_Shyam_Reel_1_(11).mp4"
        },
        // {
        //     id:6,
        //     name:"Trending in India",
        //     hashTag:"दाऊद इब्राहिम",
        //     posts:"8,227 posts",
        //     video:"https://x.com/i/status/1845613447322456487"
        // },
        // {
        //     id:7,
        //     name:"Trending in India",
        //     hashTag:"दाऊद इब्राहिम",
        //     posts:"8,227 posts",
        //     video:"https://x.com/i/status/1845613447322456487"
        // },
    ]
}
const ExploreContant = () => {
    return (
        <div className="container">
            <div className='Main_Second_First_Cont'>
                <div className='Main_Second_First_Cont_Child'>
                    <div className='Main_Second_First_Cont_Child_Icon'><IoIosSearch /></div>
                    <input className='Main_Second_First_Cont_Child_Input' placeholder='Search'></input>
                </div>
                <div className="Main_Second_Icon"><CiSettings /></div>
            </div>
            <div className="Main_First_Cont_Nav">
                <div className="Main_First_Cont_Nav_1_One">
                    <div className="Main_First_Cont_1_Child1_One"  >For you</div>
                </div>
                <div className="Main_First_Cont_Nav_2_Two">
                    <div className="Main_First_Cont_1_Child2_Two">Trending</div>
                </div>
                <div className="Main_First_Cont_Nav_3">
                    <div className="Main_First_Cont_1_Child3">News</div>
                </div>
                <div className="Main_First_Cont_Nav_4">
                    <div className="Main_First_Cont_1_Child4">Sports</div>
                </div>
                <div className="Main_First_Cont_Nav_5">
                    <div className="Main_First_Cont_1_Child5">Entertainment</div>
                </div>
            </div>
            {ExploreData.explore.map((ele) => {
                return (
                    <div key={ele.id} className="Explore_Cont">
                        <div className="Explore_Contant_HashTag">
                            <div className="Explore_Contant_Tags">
                                <p className="ele_name">{ele.name}</p>
                                <p className="ele_hashTag">{ele.hashTag}</p>
                                <p className="ele_posts">{ele.posts}</p>
                            </div>
                            <div className="Explore_More_Icon"><SlOptions /></div>
                        </div>
                    </div>
                )
            })}
            <div className="Explore_Videos_Cont">
                <p className="Videos_For_You">Videos for you</p>
                <p>Check out these popular and trending videos for you</p>
                <div className="video_container">
                {ExploreData.explore.map((ele1) => {
                    return (
                        <div key={ele1.id} className="Explore_Cont_2" >
                            <div className="Explore_Video_Cont_2_Cont" >
                                <div className="ooooooo"> <video autoPlay muted loop >
                                <source src={ele1.video} type="video/mp4" />
                                
                            </video></div></div>
                        </div>

                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default ExploreContant;