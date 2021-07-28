import React from 'react'

export default function MTH() {
    return (
        <div className="h-screen font-main overflow-hidden">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-bluegrad2 to-greengrad lg:text-7xl text-5xl font-bold">Meet the Hosts</h1>

            <div className="mt-16">
                <div className="flex flex-col md:flex-row justify-around items-center px-10 gap-10">

                    <div className={"block w-1/2 md:w-max"}>
                        <img src={'../assets/vasu.png'} />
                        <p className={"text-white font-main text-center mt-5 text-2xl md:text-5xl md:mt-10 font-semibold"}>Vasu Bansal</p>
                    </div>

                    <div className={"block w-1/2 md:w-max"}>
                        <img src={'../assets/chinmay.png'} />
                        <p className={"text-white font-main text-center mt-5 text-2xl md:text-5xl md:mt-10 font-semibold"}>Chinmay Sule</p>

                    </div>

                </div>
            </div>

        </div>
    )
}