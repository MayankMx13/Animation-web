
function cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="1.2" className="  w-full h-screen bg-[#f1f1f1] flex items-center gap-5 px-20">
            <div className="cardContainer h-[50vh] w-1/2 ">
                <div className="card w-full h-full  bg-[#004d43] rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />

                </div>

            </div>
            <div className="cardContainer w-1/2 h-[50vh] flex gap-5">
                <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>
                <div className="card w-1/2 h-full bg-zinc-800 rounded-xl flex items-center justify-center">
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>

            </div>





        </div>
    )
}

export default cards