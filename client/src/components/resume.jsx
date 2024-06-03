import React, { useEffect, useState } from "react";
import News from "./news";

export default function Resume() {
    const [news, setNews] = useState([])
    const getNews = async () => {
        const response = await fetch('http://localhost/damkar/api/get_all_news.php', {
            method: 'GET'
        })
        const res = await response.json()
        setNews(res.news)
    }
    console.log(news)

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div>
            <h1 className="flex justify-center items-center text-3xl font-semibold">
                NEWS
            </h1>
            <div className="flex flex-col gap-4">
                {news.map((item, idx) => (
                    <div key={idx}>
                        <News news={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}