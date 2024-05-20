import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import ImageGallery from 'react-image-gallery';
import './gallery.css';
import './image-gallery.scss';
import Navmenu from '../../components/navmenu/navmenu';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const Gallery = () => {
    useEffect(() => {
        document.title = "The Hobbit Website - Gallery";
        ReactGA.send({ hitType: "pageview", page: "/thehobbit/gallery", title: "The Hobbit - Gallery Page" });
    }, []);

    const images = [
        {
          original: '/images/thehobbit-react-ts/gallery/bilbo.jpg',
          thumbnail: '/images/thehobbit-react-ts/gallery/bilbo_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/gandalf.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/gandalf_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/legolas.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/legolas_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/butterflies.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/butterflies_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/human.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/human_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/elf.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/elf_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/bilbo2.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/bilbo2_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/elfbow.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/elfbow_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/barrels.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/barrels_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/legolas2.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/legolas2_small.jpg',
        },
        {
            original: '/images/thehobbit-react-ts/gallery/elf2.jpg',
            thumbnail: '/images/thehobbit-react-ts/gallery/elf2_small.jpg',
        },
    ];

	return (
        <>
            <Header />
            <Navmenu />
            <div id="contentColumnGallery" className="contentColumn contentColumnGallery">
                <ImageGallery items={images} slideDuration={2} />
            </div>
            <Footer />     
        </>
    );
}
export default Gallery;