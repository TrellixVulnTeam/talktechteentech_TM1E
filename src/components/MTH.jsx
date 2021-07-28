import React from 'react'

function MTH() {
    return (
        <div className="h-screen font-main overflow-hidden">
            <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-r from-bluegrad2 to-greengrad lg:text-7xl text-5xl font-bold">Meet the Hosts</h1>

            <div className="mt-16">
                <div className="flex flex-col md:flex-row justify-around items-center px-10 gap-10">

                    <div className={"block w-1/2 md:w-max"}>
                        <img alt={"vasu"} src={'https://i.imgur.com/Jn9w8va.png'} />
                        <p className={"text-white font-main text-center mt-5 text-2xl md:text-5xl md:mt-10 font-semibold"}>Vasu Bansal</p>
                    </div>

                    <div className={"block w-1/2 md:w-max"}>
                        <img alt="chinmay" src={'https://i.imgur.com/R0R4wH0.png'} />
                        <p className={"text-white font-main text-center mt-5 text-2xl md:text-5xl md:mt-10 font-semibold"}>Chinmay Sule</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default MTH