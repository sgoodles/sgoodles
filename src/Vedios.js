import { React, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Carousel1 from 'react-elastic-carousel';
import Carousel2 from 'react-elastic-carousel';
import './Vedio.css';
import Img1 from './img/vedio_image1.jpg';

export default function Vedios() {
    const [isShowing, setIsShowing] = useState(false);

    const breakPoints = [
        { width: 1, itemsToShow: 3 },
        { width: 500, itemsToShow: 5 },
        { width: 768, itemsToShow: 6 },
        { width: 1200, itemsToShow: 10 }
    ];

    return (
        <div className="vedio">
            <div className="vedio1"
                onMouseEnter={() => setIsShowing(true)}
                onMouseLeave={() => setIsShowing(false)}
            >
                <div className="watch">
                    <span className="span">Latest & Trending</span>
                </div>
                <Carousel
                    pagination={true}
                    showArrows={isShowing}
                    breakPoints={breakPoints}
                >
                    
                    <img src={Img1} />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6783/1086783-v-987c1faa6265" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/473/1080473-v-d97e637cb29d" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3869/1083869-v-cf73d8947672" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4294/1074294-v-ef854a9ae0dc" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8407/1068407-v-0b0cfa8d9f74" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9895/1059895-v-bc89231f8f01" />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    

                </Carousel>
                <div className="watch">
                    <span className="span">Popular Shows</span>
                </div>
                <Carousel1
                    pagination={true}
                    showArrows={isShowing}
                    breakPoints={breakPoints}
                >
                    
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8774/1028774-v-85c7d8f07559" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3007/1073007-v-a7de9b990ca9" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3894/1063894-v-36910d21a4ee" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2688/1052688-v-33160b2f1eb2" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/830896-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8858/1058858-v-ce3304123423" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8946/38946-v" />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    

                </Carousel1>
                <div className="watch">
                    <span className="span">Movies Recommended For You</span>
                </div>
                <Carousel2
                    pagination={true}
                    showArrows={isShowing}
                    breakPoints={breakPoints}
                >
                    
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/896/580896-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1529/571529-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8285/388285-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v" />
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v" />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    <img src={Img1} />
                    

                </Carousel2>
            </div>
        </div>
    );
}

// export default Vedios;


