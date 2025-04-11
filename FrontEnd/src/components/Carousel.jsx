import React, { useEffect, useState } from 'react'

const Carousel = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const urls = [];
            for (let i = 0; i < 3; i++) {
                const res = await fetch('https://foodish-api.com/api/');
                const data = await res.json();
                urls.push(data.image);
            }
            setImages(urls);
        };

        fetchImages();
    }, []);

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                <div className="carousel-inner max-h-[500px]">
                    <div className='carousel-caption z-10'>
                        <form className="d-flex ">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    {images.map((img, idx) => (
                        <div className={`carousel-item ${idx === 0 ? 'active' : ''}`} key={idx}>
                            <img src={img} className="w-full h-[500px] object-cover brightness-50" alt={`food-${idx}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
