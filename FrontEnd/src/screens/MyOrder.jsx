import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from 'axios'

const MyOrder = () => {
    const [orderData, setOrderData] = useState([])

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail')
        try {
            const response = await axios.post("http://localhost:5000/api/myOrderData", {
                email: userEmail
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setOrderData(response.data.order_data || [])
        } catch (error) {
            console.error("Error fetching order data:", error)
        }
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {
                        orderData.length > 0 ? (
                            orderData.slice(0).reverse().map((orderGroup, groupIndex) => (
                                <div key={groupIndex}>
                                    {orderGroup.map((item, itemIndex) => {
                                        if (item.Order_date) {
                                            return (
                                                <div className='m-auto mt-5' key={itemIndex}>
                                                    <hr />
                                                    <h5 className='text-success'>Order Date: {item.Order_date}</h5>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className='col-12 col-md-6 col-lg-3' key={itemIndex}>
                                                    <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
                                                        <div className='card-body'>
                                                            <h5 className='card-title'>{item.name}</h5>
                                                            <div className='container w-100 p-0'>
                                                                <span className='m-1'>{item.qty}</span>
                                                                <span className='m-1'>{item.size}</span>
                                                                <span className='m-1'>₹{item.price}/-</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            ))
                        ) : (
                            <div>
                                <h1 className='fs-5 font-bold'>No Orders Yet</h1>
                            </div>
                        )
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyOrder
