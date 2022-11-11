

import React from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

function FeaturedContainer() {
    return (
        <>
            <div className="w-full h-full flex flex-row gap-2 justify-center">
                <FeaturedPost />
                <div className="grid grid-cols-2 gap-2">
                    <MasonaryItem />
                    <MasonaryItem />
                    <MasonaryItem />
                    <MasonaryItem />
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer