import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './shopping.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const hobbitMugs= require('../../images/shopping/hobbit_mugs.jpg');
const gollumPoster= require('../../images/shopping/gollum_poster.jpg');
const hobbitBookmarks= require('../../images/shopping/hobbit_bookmarks.jpg');
const hobbitWig= require('../../images/shopping/hobbit_wig.jpg');
const gandalfCostume= require('../../images/shopping/gandalf_costume.jpg');
const gandalfWig= require('../../images/shopping/gandalf_wig.jpg');

const Shopping = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Shopping";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/shopping", title: "The Hobbit - Shopping Page" });
        sessionStorage.setItem('currentPage', '4');
    }, []);

	return (
        <>
            <Header />
            <Navmenu />
            <div className="contentColumn">
				<div className="shoppingContainer">
					<div className="shoppingHeading">Shopping Mania</div>
					<div className="shoppingTable">
						<div className="gridRow">
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Bilbo Mugs</div>
                                </div>
                                <div>
                                    <div className="placeholder"><img className="shoppingImage" src={hobbitMugs} alt="Hobbit Mugs" /></div>
                                </div>
                                <div>
                                    <div className="description">Fancy a cup of tea with Bilbo? Sit down, relax and enjoy yourself with these delightful mugs straight from Middle Earth itself. Emblazoned with images from the movie, you will truly believe you have escaped to your very own Hobbit hole to enjoy a mug of your favorite tea or coffee. Need a conversation to go with it? Never fear, we provide two mugs that will let you and a friend enjoy the fantasy of Middle Earth together!</div>
                                </div>
                            </div>
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Gollum Posters</div>
                                </div>
                                <div>
                                    <div className="placeholder"><img className="shoppingImage" src={gollumPoster} alt="Gollum Poster" /></div>
                                </div>
                                <div>
                                    <div className="description">Are you a fan of that nasty, tricksy, slimy, slithering, Hobbit hating character Gollum? If the answer is yes, bring Gollum right into your lounge room with these two masterfully created posters. Soon to be populating novelty stores at discount rates, why not pick them up now at a premium price, with this exclusive offer!</div>	
                                </div>
                            </div>
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Hobbit Bookmarks</div>
                                </div>
                                <div>
                                    <div className="placeholder"><img src={hobbitBookmarks} alt="Hobbit Bookmarks" /></div>
                                </div>
                                <div>
                                    <div className="description">Why watch the movies when you can read the books! Curl up with a good book and make use of these artistic bookmarks instead. Not suitable for use with eReaders...</div>
                                </div>
                            </div>
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Hobbit Wig</div>
                                </div>
                                <div>
                                    <div className="placeholder"><img src={hobbitWig} alt="Hobbit Wig" /></div>
                                </div>
                                <div>
                                    <div className="description">Have you ever wanted to walk down the street with a shining new haircut just like Bilbos? I know i have, and now, you can too with this ever stylish Hobbit wig. You will be the envy of all your friends.</div>
                                </div>
                            </div>
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Gandalf Costume</div>
                                    
                                </div>
                                <div>
                                    <div className="placeholder"><img className="shoppingImage" src={gandalfCostume} alt="Gandalf Costume" /></div>
                                </div>
                                <div>
                                    <div className="description">Enjoy this cult style Gandalf costume, perfect for your little ones. For best effect, buy it for your favorite child, and the others will follow in awe. Every group needs a leader, choose yours today.</div>
                                    
                                </div>
                            </div>
                            <div className="gridItem">
                                <div>
                                    <div className="heading">Gandalf Beard &amp; Wig</div>
                                </div>
                                <div>
                                    <div className="placeholder"><img className="shoppingImage" src={gandalfWig} alt="Gandalf Wig &amp; Beard" /></div>
                                </div>
                                <div>
                                    <div className="description">Enjoy this Gandalf wig and beard set, perfect for those times when you just want to be like an old man! With a past-grey white beard, and matching 70's style hair, stun people into submission with your Gandalf the White costume.</div>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
			</div>
            <Footer />     
        </>
    );
}
export default Shopping;