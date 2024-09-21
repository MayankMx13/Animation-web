import { useEffect } from "react";
import { gsap } from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function Features() {
    useEffect(() => {

        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
        });


        const cards = document.querySelectorAll(".cardcontainer");
        const texts = document.querySelectorAll(".cardcontainer h1");


        cards.forEach((card, i) => {
            const text = texts[i];

            gsap.set(text, { opacity: 0, scale: 0 });

            card.addEventListener("mouseenter", () => {
                gsap.to(text, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power4.inOut",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(text, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.5,
                    ease: "power4.inOut",
                });
            });
        });

        // Clean up Locomotive Scroll on unmount
        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container>
            <div data-scroll data-scroll-speed=".32" className="w-full py-20">
                <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                    <h1 className="text-8xl font-main tracking-tight">Featured projects</h1>
                </div>

                <div className="px-20">
                    <div className="cards w-full flex items-center justify-center gap-5 mt-10">
                        <div className="relative cardcontainer w-1/2 h-[75vh] rounded-xl bg-red-500">
                            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none tracking-tighter text-8xl">FYDE</h1>
                            <div className="card w-full h-full overflow-hidden rounded-xl">
                                <img
                                    className="w-full h-full bg-cover"
                                    src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                    alt="Fyde Project"
                                />
                            </div>
                        </div>
                        <div className="relative cardcontainer w-1/2 h-[75vh] rounded-xl bg-red-500">
                            <h1 className="absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]">VISE</h1>
                            <div className="card w-full h-full overflow-hidden rounded-xl">
                                <img
                                    className="w-full h-full bg-cover"
                                    src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                    alt="Vise Project"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
