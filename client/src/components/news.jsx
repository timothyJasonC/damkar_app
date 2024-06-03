import React from "react";
import { Link } from "react-router-dom";

export default function News({ news }) {
    return (
        <div className="bg-white rounded-2xl h-full border-2 grid grid-cols-1 md:grid-cols-2 gap-5">
            <img src={`http://localhost/damkar/api/${news.image}`} className="rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl h-full object-cover object-center" alt="" />
            <div className="flex flex-col justify-center items-center md:items-start md:my-4 gap-4">
                <h1 className="text-2xl font-bold flex justify-start items-start">
                    {news.title}
                </h1>
                <div className="flex gap-5 text-gray-500">
                    <p>by: {news.name}</p>
                    <p>created at: {news.created_at}</p>
                </div>

                <div className="max-w-sm h-full" dangerouslySetInnerHTML={{ __html: news.content }} />

                <Link to={`/news/${news.news_id}`} className="bg-primary p-2 w-2xl text-white rounded-2xl mb-4 hover:cursor-pointer">baca selengkapnya</Link>
            </div>
        </div>
    )
}