import { useState, useEffect } from 'react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // If scroll down, hide the navbar
                setIsVisible(false);
            } else {
                // If scroll up, show the navbar
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // Cleanup function to remove the event listener
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, []);

    return (
        <div className={`fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center transition-all duration-300 transition:ease:[0.85, 0, 0.15, 1] ${isVisible ? 'top-0' : '-top-20'}`}>
            <div className="left">
                <svg width="72" height="30" viewBox="0 0 72 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Your SVG content here */}
                </svg>
            </div>
            <div className="right flex gap-10">
                {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map((item, index) => (
                    <a key={index} className={`text-lg font-regular capitalize ${index === 4 && 'ml-32'}`}>
                        {item}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
