import { motion } from "framer-motion"


function marquee() {
    return (

        <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full  py-10 bg-[#004D43] rounded-3xl rounded-b-none'>
            <div className="text border-t-2 border-b-2 border-zinc-300 flex items-center  overflow-hidden font-main whitespace-nowrap text-zinc-50 ">

                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 4 }} className="text-[24vw] leading-none font-semibold  uppercase pt-4 pr-10 ">We are venom</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 4 }} className="text-[24vw] leading-none font-semibold  uppercase pt-4 pr-10 ">We are venom</motion.h1>
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 4 }} className="text-[24vw] leading-none font-semibold  uppercase pt-4 pr-10  ">We are venom</motion.h1>

            </div>
        </div>
    )
}

export default marquee