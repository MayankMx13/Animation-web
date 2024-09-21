

function about() {
    return (
        <div className="w-full py-[9vh] bg-[#CDEA68] rounded-t-3xl text-black font-light ">
            <h1 className="font-main text-[4vw] leading-[4vw] px-20 tracking-tighter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex perferendis excepturi? Quasi, dolore harum? Similique nihil, repudiandae quo itaque beatae mollitia tempora repellendus sunt error laboriosam sit facilis placeat libero reprehenderit!
            </h1>
            <div className="w-full border-t-[1px] p-20 mt-20 border-[#a1b562] flex justify-between">
                <div className="w-1/2 ">
                    <h1 className="text-4xl mb-6 font-semibold">Our Approach</h1>
                    <button className="px-10 py-4 bg-zinc-900 rounded-full text-white uppercase flex items-center gap-4 justify-between">Read More

                        <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                    </button>
                </div>


                <div className="w-1/2 h-[70vh] rounded-3xl bg-[#93a459] overflow-hidden">
                    <img className="bg-cover h-full" src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" alt="" /></div>


            </div>


        </div>
    )
}

export default about