import CreateKidsProfile from "../components/CreateKidsProfile/CreateKidsProfile";
import DownloadShows from "../components/DownloadShows/DownloadShows";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";
import TvEnjoy from "../components/TvEnjoy/TvEnjoy";
import WatchEverywhere from "../components/WatchEverywhere/WatchEverywhere";
import Footer from "../components/Footer/Footer";
import SiteLink from "../components/SiteLink";

export default function LandingPage() {
    return (
        <div className="flex flex-col gap-2 bg-dark"> 
            <Hero />
            <TvEnjoy />
            <DownloadShows />
            <WatchEverywhere />
            <CreateKidsProfile />
            <FAQ />
            <Footer />
            <SiteLink />
            {/* <Hero /> */}
        </div>
        /* Had a little play moving the Footer to the top to see how the 
        components can be utilized using some twice etc */
    );
}
