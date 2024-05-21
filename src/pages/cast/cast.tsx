import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import './cast.css';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const ianmckellen = require('../../images/cast/ianmckellen.jpg');
const martinfreeman = require('../../images/cast/martinfreeman.jpg');
const richardarmitage = require('../../images/cast/richardarmitage.jpg');
const benedictcumberbatch = require('../../images/cast/benedictcumberbatch.jpg');
const orlandobloom = require('../../images/cast/orlandobloom.jpg');
const evangelinelilly = require('../../images/cast/evangelinelilly.jpg');
const leepace = require('../../images/cast/leepace.jpg');
const lukeevans = require('../../images/cast/lukeevans.jpg');
const stephenfry = require('../../images/cast/stephenfry.jpg');
const peterjackson = require('../../images/cast/peterjackson.jpg');
const franwalsh = require('../../images/cast/franwalsh.jpg');
const phillipaboyens = require('../../images/cast/phillipaboyens.jpg');

const Cast = () => {
    
    const [actorBio, setActorBio] = useState<{ [key: string]: boolean }>({ianmckellen: false, martinfreeman: false, richardarmitage: false, benedictcumberbatch: false, orlandobloom: false, evangelinelilly: false, leepace: false, lukeevans: false, stephenfry: false, peterjackson: false, franwalsh: false, phillipaboyens: false});
    
    useEffect(() => {
        document.title = "The Hobbit Website - Cast & Crew";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/cast&crew", title: "The Hobbit - Cast & Crew Page" });
        sessionStorage.setItem('currentPage', '1');
      }, []);	
    
    function displayBio(actor: string) {
        let bio = actorBio;
        if (bio[actor] === true) {
            bio[actor] = false;
            setActorBio({...bio});
            return;
        }
        for (let key in bio) {
            bio[key] = false;
        }
        bio[actor] = true;
        setActorBio({...bio});
    }

	return (
        <>
            <Header />
            <Navmenu />
            <div className="contentColumn">
				<div className = "castHeading">Cast &amp; Crew</div>
				<table className="castTable" id = "castTable">
					<tbody>
                        <tr>
                            <td colSpan = {2}>
                                <div className="tableScroll">
                                    <table>
                                        <tbody>
                                            <tr onClick={() => displayBio('ianmckellen')}>
                                                <td className="castName"><strong>Ian McKellen</strong><br/>Gandalf the Grey</td>
                                                <td><img src={ianmckellen} alt="Ian McKellen"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('martinfreeman')}>
                                                <td className="castName"><strong>Martin Freeman</strong><br/>Bilbo Baggins</td>
                                                <td><img src={martinfreeman} alt="Martin Freeman"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('richardarmitage')}>
                                                <td className="castName"><strong>Richard Armitage</strong><br/>Thorin Oakenshield</td>
                                                <td><img src={richardarmitage} alt="Richard Armitage"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('benedictcumberbatch')}>
                                                <td className="castName"><strong>Benedict Cumberbatch</strong><br/>Voice of Smaug</td>
                                                <td><img src={benedictcumberbatch} alt="Benedict Cumberbatch"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('orlandobloom')}>
                                                <td className="castName"><strong>Orlando Bloom</strong><br/>Legolas</td>
                                                <td><img src={orlandobloom} alt="Orlando Bloom"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('evangelinelilly')}>
                                                <td className="castName"><strong>Evangeline Lilly</strong><br/>Tauriel</td>
                                                <td><img src={evangelinelilly} alt="Evangeline Lilly"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('leepace')}>
                                                <td className="castName"><strong>Lee Pace</strong><br/>Thranduil</td>
                                                <td><img src={leepace} alt="Lee Pace"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('lukeevans')}>
                                                <td className="castName"><strong>Luke Evans</strong><br/>Bard the Bowman</td>
                                                <td><img src={lukeevans} alt="Luke Evans"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('stephenfry')}>
                                                <td className="castName"><strong>Stephen Fry</strong><br/>Master of Laketown</td>
                                                <td><img src={stephenfry} alt="Stephen Fry"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('peterjackson')}>
                                                <td className="castName"><strong>Peter Jackson</strong><br/>Director/Producer<br/>Screenwriter</td>
                                                <td><img src={peterjackson} alt="Peter Jackson"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('franwalsh')}>
                                                <td className="castName"><strong>Fran Walsh</strong><br/>Producer<br/>Screenwriter</td>
                                                <td><img src={franwalsh} alt="Fran Walsh"/></td>
                                            </tr>
                                            <tr onClick={() => displayBio('phillipaboyens')}>
                                                <td className="castName"><strong>Phillipa Boyens</strong><br/>Screenwriter<br/>Co-Producer</td>
                                                <td><img src={phillipaboyens} alt="Phillipa Boyens"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </td>
                            <td>
                                <div className={"biography " + (actorBio['ianmckellen'] ? 'bioShow' : 'bioHide')}>Sir Ian Mckellen, who plays Gandalf the Grey in Peter Jacksons Lord of the Rings Trilogy, and now again in the Hobbit series, was born in the North of England. His career has seen over 50 international acting awards, and his portrayal of Gandalf in "The Lord of the Rings: The Fellowship of the Ring" saw him nominated for an Academy Award for best supporting actor, along with a Screen Actors Guild (SAG) Award. In 1991, Sir Ian was knighted for services to the theatre in the UK.</div>
                                <div className={"biography " + (actorBio['martinfreeman'] ? 'bioShow' : 'bioHide')}>Martin Freeman stars as Bilbo Baggins in Peter Jackson's The Hobbit trilogy. His recent Endeavours also include science fiction comedy "The World's End", and independent film "Svengali". Freeman also lends his voice to the animated movie feature "Saving Santa". Freeman is best known for his roles in comedy, performing in titles such as "Love Actually", "Shaun of the Dead", "Hot Fuzz", and "The Hitchhiker's Guide to the Galaxy". Awards include an Emmy nomination for Best Supporting Actor on the award winning television series "Sherlock", a BAFTA TV award for his work on this program, along with a second Emmy nomination.</div>
                                <div className={"biography " + (actorBio['richardarmitage'] ? 'bioShow' : 'bioHide')}>Playing Thorin Oakenshield in The Hobbit trilogy, is recent critic and audience favourite, Richard Armitage. Furthermore, in 2014 he performs in the action thriller "Into the Storm". Playing popular roles in such television productions as "North and South", "Spooks", "Robin Hood", and "Strike Back" has earned him a somewhat high profile. Born in Leicester, England, Armitage attended the London Academy of Music and Dramatic Art (LAMDA). He starred in his first film "Captain America: The First Avenger" in 2011, which proved to be a hit with fans.</div>
                                <div className={"biography " + (actorBio['benedictcumberbatch'] ? 'bioShow' : 'bioHide')}>The voice of Smaug, played by Benedict Cumberbatch, is also currently performing in "12 Years a Slave", by Steve McQueen, and will next appear amongst an all star cast in film adaption of the play "August: Osage County". 2013 also saw him star in the latest Star Trek instalment, "Star Trek: Into Darkness". Cumberbatch has received Emmy, Golden Globe, and two BAFTA TV award nominations for his part in the modern rendition of "Sherlock Holmes". A role in the mini-series "Parade's End" saw him receive a Second Best Actor Emmy nomination. It was Cumberbatch's portrayal of Stephen Hawking in the 2004 bipoic "Hawking" that brought him international recognition and his first BAFTA TV award nomination.</div>
                                <div className={"biography " + (actorBio['orlandobloom'] ? 'bioShow' : 'bioHide')}>Orlando Bloom continues his role as Legolas in Peter Jacksons latest contribution to the fantasy world of Middle Earth. Born in Canterbury, England,  Bloom was trained at the National Youth Theatre in London, and received a scholarship to the British American Drama Academy. His first role in a feature film was in "Wilde", starring Stephen Fry and Jude Law. Peter Jacksons first trilogy set in Tolkien's Middle Earth saw Bloom achieve international fame.</div>
                                <div className={"biography " + (actorBio['evangelinelilly'] ? 'bioShow' : 'bioHide')}>Most famous for her part in the most talked about TV series in television history, "Lost", Evangeline Lilly stars as Tauriel in "The Hobbit: The Desolation of Smaug". She also had a role in the Oscar winning Best Picture "The Hurt Locker". Other shows that grace her list of achievements are the science fiction action movie "Real Steel", and the indie feature "Afterwards". She will also have a part in the third instalment in The Hobbit trilogy, "There and Back Again".</div>
                                <div className={"biography " + (actorBio['leepace'] ? 'bioShow' : 'bioHide')}>Beginning his career as early as his high school days, Lee Pace has performed many classic roles, including Romeo in "Romeo &amp; Juliet", the title role in "King Richard II", and Cassius in "Julius Ceaser". Pace starred in the 2003 Sundance Film Festival hit "Soldier's Girl", which aired on Showtime. Seen in many big budget, high profile ventures, Paces' latest achievements include Steven Spielbergs Oscar Nominated "Lincoln", and in "The Twilight Saga: Breaking Dawn Pt 2". He will return in the third instalment of Peter Jackson's "The Hobbit" trilogy.</div>
                                <div className={"biography " + (actorBio['lukeevans'] ? 'bioShow' : 'bioHide')}>Appearing in the film as Bard the Bowman, Luke Evans has starred in numerous films, including "Immortals", "The Three Musketeers", "The Raven", "No One Lives", and the upcoming "The Great Train Robbery". Prior to his film career, Evans had successfully achieved stardom in West End plays and Musicals. Evans lives in London.</div>
                                <div className={"biography " + (actorBio['stephenfry'] ? 'bioShow' : 'bioHide')}>Stephen Fry is cast in the role of Master of Laketown, having achieved success in his career as an actor, director, and writer. Fry has received numerous awards, including a Screen Actors Guild Award, a Critics Choice Award, and a Golden Globe nomination. Fry attended Cambridge University where he embarked on an eventful acting career.</div>
                                <div className={"biography " + (actorBio['peterjackson'] ? 'bioShow' : 'bioHide')}>Peter Jackson is one of the most well known and successful film makers in the world. Best known for his achievements in the popular "The Lord of the Rings" trilogy, these films collectively received a total of 30 Academy Award nominations, winning 17 of these. in 2010, Jackson received a knighthood for his services to the film industry.</div>
                                <div className={"biography " + (actorBio['franwalsh'] ? 'bioShow' : 'bioHide')}>Fran Walsh worked with Peter Jackson on the three instalments of his "Lord of the Rings" trilogy. She won 3 Academy Awards, two BAFTA Awards, and two Golden Globe Awards, including Best Picture. She has returned to work with Peter on his next trilogy set in the well known fantasy world of Middle Earth, created by Tolkien. Walsh began her writing career after attending Victoria University, where she majored in English Literature. She also has a background in music.</div>
                                <div className={"biography " + (actorBio['phillipaboyens'] ? 'bioShow' : 'bioHide')}>Phillipa Boyens made her screenwriting debut with the first movie "The Lord of the Rings" trilogy, "The Fellowship of the Ring", earning an Oscar, BAFTA Award and WGA Award nomination. Boyens co-wrote the screenplay for the second movie in the series, "The Lord of the Rings: The Two Towers", and for efforts in the third movie in the series, "The Lord of the Rings: Return of the King", Phillipa shared in an Academy Award and a BAFTA Award. Phillipa began her career as a playwright, teacher, producer and editor.</div>				
                            </td>
                        </tr>
                    </tbody>
				</table>
			</div>
            <Footer /> 
        </>
    );
}
export default Cast;