
import React, { useEffect } from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

import { featuredMesonaryData } from "../../data/featuredMesonaryData";

function FeaturedContainer() {

    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost />
                <div className="grid sm:grid-cols-2  gap-2">
                    {featuredMesonaryData.map((content, index) => (
                        <MasonaryItem key={index} image={content.image} icon={content.icon} category={content.category} title={content.title} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer