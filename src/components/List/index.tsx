import React from "react"
import { GameResponse } from "../../types/games"

interface Props {
    data: GameResponse[]
}

const List = ({data}: Props) => {

    return <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {data.map(({thumbnail, title, short_description, platform, release_date}, i) => (
            <div key={i} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                    <img className="rounded-t-lg" src={thumbnail} alt={title} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">{title}</h5>
                    </a>                    
                    <p className="multi-line">{short_description}</p>
                </div>
                <hr />
                <div className="grid grid-cols-2 gap-4 p-2">
                    <div>
                        <span className="text-gray-300 block">platform</span>
                        <span>{platform}</span>
                    </div>
                    <div>
                        <span className="text-gray-300 block">Release Date</span>
                        <span>{release_date}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>

    </>
}

export default List