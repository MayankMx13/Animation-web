import { motion } from "framer-motion";


function landing() {
    return (

        <div data-scroll data-scroll-section data-scroll-speed='-.3' className="w-full h-screen bg-[#f1f1f1] pt-1">
            <div className="textstructure mt-52 px-20">
                {["We Create", "Eye Opening", "presentations"].map((item, index) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="masker">
                            <div className="flex items-end overflow-hidden ">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "7vw" }}
                                        transition={{
                                            ease: [0.76, 0, 0.24, 1]
                                            , duration: 1
                                        }}
                                        className="mr-5 w-[7vw] rounded-md h-[5.7vw] relative -top-[0.4vw] bg-green-500"></motion.div>
                                )}
                                <h1 className="pt-[2vw] -mb-[1vh] uppercase text-[9vw] leading-[.75] font-main">
                                    {item}
                                </h1>
                            </div>
                        </div>
                    );
                })}
                <div className="border-t-[1px]  border-zinc-800 mt-14 flex justify-between items-center px-20 py-5 ">
                    {["for Public and private companies",
                        "from the first pitch to IPO"
                    ].map((item, index) => (<p key={index} className="text-md font-light tracking-tighter leading-none">
                        {item}
                    </p>))}

                    <div className="start felx items-center">
                        <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-regular capitalize text-sm">start</div>
                    </div>


                </div>


            </div >

        </div>


    )
}

export default landing