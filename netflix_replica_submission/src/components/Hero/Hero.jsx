import Header from "./components/Header";
import CTA from "../CTA";

export default function Hero() {
    return (
        <div>
            {/* Hero Section */}

            <div className="bg-[url('images/website_large.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="bg-gradient-to-t from-black/80 via-black/40 to-black text-text-primary">
                    
                    <Header />
                    <div className="px-8 py-14 md:py-28 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold md:font-black">Enjoy big movies, hit series and more from &nbsp;£14.90</h1>
                        <p className="text-lg md:text-2xl font-normal mt-4">Join today. Cancel anytime.</p>

                        <CTA />

                    </div>
                </div>
            </div>

        </div>
    );
}