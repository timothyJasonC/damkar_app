import React from "react";
import News from "./news";

export default function Resume(){
    return(
        <div>
            <h1 className="flex justify-center items-center text-3xl font-semibold">
                NEWS
            </h1>

            <div>
                <News/>
                <News/>
                <News/>
                <News/>
            </div>
        </div>
    )
}