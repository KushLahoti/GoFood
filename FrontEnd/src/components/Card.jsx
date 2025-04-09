import React from 'react'

const Card = () => {
    return (
        <div>
            <div>
                <div className="card mt-3 max-h-[390px] bg-base-100 w-72 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-full bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='inline h-100 text-xl'>
                                Total Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card