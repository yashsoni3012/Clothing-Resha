import React from 'react';
import bgImage from '../assets/ImageGridBanner.jpg';
import img1 from '../assets/ImageGrid1.jpeg';
import img2 from '../assets/ImageGrid2.jpeg';
import img3 from '../assets/ImageGrid3.jpeg';
import img4 from '../assets/ImageGrid4.jpeg';
import img5 from '../assets/ImageGrid5.jpeg';
import img6 from '../assets/ImageGrid6.jpeg';
import img7 from '../assets/ImageGrid7.jpeg';
import img8 from '../assets/ImageGrid8.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImageGrid = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1400px]">
                {images.map((img, index) => (
                    <div
                        key={index} 
                        className="relative group  w-full aspect-[4/3]  overflow-hidden rounded-xl shadow-lg"     
                    >
                        <img
                            src={img}
                            alt={`img-${index}`}
                            className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;
