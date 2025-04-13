import React, { useEffect } from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'
import DeleteIcon from '@mui/icons-material/Delete'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const data = useCart()
    const dispatch = useDispatchCart()
    const navigate = useNavigate()

    useEffect(() => {
        const userEmail = localStorage.getItem("userEmail")
        if (!userEmail) {
            navigate("/login")
        }
    }, [navigate])

    if (data.length === 0) {
        return (
            <div className='m-5 w-100 text-center fs-3'>
                The Cart is Empty!
            </div>
        )
    }

    const totalPrice = data.reduce((total, food) => total + food.price, 0)

    const handleCheckOut = async () => {
        const userEmail = localStorage.getItem("userEmail")

        if (!userEmail) {
            alert("User email not found. Please login again.")
            return
        }

        const payload = {
            order_data: data,
            email: userEmail,
            order_date: new Date().toDateString()
        }

        try {
            const response = await axios.post("http://localhost:5000/api/orderData", payload)

            if (response.status === 200) {
                dispatch({ type: "DROP" })
            }
        } catch (error) {
            console.error("Checkout Error: ", error)
            alert("Something went wrong during checkout.")
        }
    }

    return (
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thead className='text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food, index) => (
                        <tr key={index}>
                            <th scope='row'>{index + 1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td>
                                <button type='button' className='btn p-0'>
                                    <DeleteIcon onClick={() => dispatch({ type: "REMOVE", index })} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckOut}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
