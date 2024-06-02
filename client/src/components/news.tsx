import React from "react";

export default function News() {
    return (
        <div className="my-10">
            <div className="border-black border-2 grid grid-cols-2">
                <div >
                    <img src="https://placeholder.com/300x300" alt="" />
                </div>
                <div className="">
                    <h1 className="font-medium flex justify-start items-start">
                        head news
                    </h1>
                    <h2 className="my-10">
                        awal berita
                    </h2>
                    <button className="my-14">baca selengpaknya</button>
                </div>
            </div>
        </div>
    )
}