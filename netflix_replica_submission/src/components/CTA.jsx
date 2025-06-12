import { FaChevronRight } from "react-icons/fa";

export default function CTA() {
    return (
        <div className="mt-6">
            <h3 className="text-lg md: text-xl font-normal">
                Ready to watch? Enter your email to create or restart your membership.</h3>
                {/*email input */}
                <div className="flex flex-col sm:flex-row items-center justify-center  gap-4 mt-4">
                    <input className="flex-1 max-w-[370px] bg-black/40 text-white-alpha-70 font-normal
                    border border-white-alpha-70 rounded w-full p-2" type="email" 
                    placeholder="Email address" />
                    <button className="w-fit bg-brand-primary text-text-primary py-[10px] px-4 text-sm 
                    rounded flex items-center gap-2"><span>Get Started</span>
                    <FaChevronRight /></button>

                </div>
        </div>
    );
}