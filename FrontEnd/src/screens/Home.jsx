import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel.jsx'
import axios from 'axios'

const Home = () => {

    const [foodCat, setFoodCat] = useState([])
    const [foodItem, setFoodItem] = useState([])

    const loadData = async () => {
        try {
            let response = await axios.post("http://localhost:5000/api/foodData");
            console.log(response.data[0], response.data[1]);
            setFoodItem(response.data[0]);
            setFoodCat(response.data[1]);
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }


    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <div><Navbar /></div>
            <div><Carousel /></div>
            <div className="container">
                {foodCat.length > 0 &&
                    foodCat.map((data) => (
                        <div key={data._id} className="mb-4">
                            <div className="fs-3 mb-3">{data.CategoryName}</div>
                            <hr />
                            <div className="row g-4">
                                {foodItem.length > 0 ? (
                                    foodItem
                                        .filter((item) => item.CategoryName === data.CategoryName)
                                        .map((filterItems) => (
                                            <div key={filterItems._id} className="col-12 col-sm-6 col-lg-3">
                                                <Card
                                                    foodName={filterItems.mame}
                                                    options={filterItems.options[0]}
                                                    imgSrc={filterItems.img}
                                                />
                                            </div>
                                        ))
                                ) : (
                                    <div>No Such Data Found</div>
                                )}
                            </div>
                        </div>
                    ))}
            </div>

            <div><Footer /></div>
        </div>
    )
}

export default Home