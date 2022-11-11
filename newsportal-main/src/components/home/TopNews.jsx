import React from 'react'
import TopNewsCard from './TopNewsCard'

const TopNews = () => {
    return (
        <div className="px-32 pt-10">
            <div className="grid grid-cols-2 gap-x-2">
                <TopNewsCard
                titleSize="xl"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam error perspiciatis aut incidunt hic tempora, exercitationem necessitatibus ipsum libero"
                className="row-span-2" title="Kungfu Panda: The Dragon Knight Season 2" 
                image="https://dailyresearchplot.com/wp-content/uploads/2022/08/Kung-Fu-Panda-The-Dragon-Knight-Season-2.jpg" />
                <div className="grid grid-cols-2 gap-2">
                    <TopNewsCard titleSize="sm" title="Kungfu Panda: The Dragon Knight Season 2" image="https://dailyresearchplot.com/wp-content/uploads/2022/08/Kung-Fu-Panda-The-Dragon-Knight-Season-2.jpg" />
                    <TopNewsCard titleSize="sm" title="Kungfu Panda: The Dragon Knight Season 2" image="https://dailyresearchplot.com/wp-content/uploads/2022/08/Kung-Fu-Panda-The-Dragon-Knight-Season-2.jpg" />
                    <TopNewsCard titleSize="sm" title="Kungfu Panda: The Dragon Knight Season 2" image="https://dailyresearchplot.com/wp-content/uploads/2022/08/Kung-Fu-Panda-The-Dragon-Knight-Season-2.jpg" />
                    <TopNewsCard titleSize="sm" title="Kungfu Panda: The Dragon Knight Season 2" image="https://dailyresearchplot.com/wp-content/uploads/2022/08/Kung-Fu-Panda-The-Dragon-Knight-Season-2.jpg" />
                </div>
            </div>
        </div>
    )
}

export default TopNews