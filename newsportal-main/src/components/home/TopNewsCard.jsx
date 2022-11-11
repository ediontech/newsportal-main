import React from 'react'

const TopNewsCard = ({ image, title, desc, titleSize }) => {
    return (
        <div className="border rounded-md bg-white overflow-hidden">
            <div>
                <img src={image} alt="" />
            </div>
            <div className=' p-2'>
                <h1 className={`font-semibold text-${titleSize}`}>{title}</h1>
                <p className="text-gray-500 text-sm">{desc}</p>
            </div>
        </div>
    )
}

export default TopNewsCard