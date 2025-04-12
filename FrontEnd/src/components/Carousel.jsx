import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{ objectFit: 'contain !important' }}
            >
                <div className="carousel-inner max-h-[500px]">
                    <div className="carousel-caption z-10">
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success text-white bg-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    <div className="carousel-item active">
                        <img
                            src="https://imgs.search.brave.com/Y50qiR3NJODkBYjA8Zd5uSt3Q2a5EW1fsP8iJb29Uos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy95dW1teS1waXp6/YS13aXRoLXNhbGFt/aS1hbmQtY2hlZXNl/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA"
                            className="w-full h-[500px] object-cover brightness-50"
                            alt="Pizza"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://imgs.search.brave.com/8BGndwwudAuxJutZqROaIuOUhVQvGBlrfN59yWOttDA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/MjQyMjY4Ny9waG90/by90YW5kb29yaS1w/YW5lZXItdGlra2Eu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXl4TUE3dWtFdW9i/bmthWWJsX2hQNnZU/YTAyWkx3RFA5VFZE/TWxFX09GLUU9"
                            className="w-full h-[500px] object-cover brightness-50"
                            alt="Paneer Tikka"
                        />
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://imgs.search.brave.com/YoQDIEEIfFsOkiyh2aotNofZnFukGZCgc6O-luiNQ8A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyL2Ux/LzBiLzcyZTEwYjc2/ZWNiZmIxMDFjYzJi/NTQ5MWYwMmVkOGJl/LmpwZw"
                            className="w-full h-[500px] object-cover brightness-50"
                            alt="Biryani"
                        />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
