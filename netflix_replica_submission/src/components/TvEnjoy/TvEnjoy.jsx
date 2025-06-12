export default function TvEnjoy () {
    return (
        <div className="px-8 py-14 bg-black text-text-primary text-center">
            <div className="md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold md:font-black">Enjoy on your TV</h2>
                <p className="text-lg font-normal mt-4"> Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, 
                    Blu-ray players and more.</p>
            </div>
            <div className="m-auto max-w-screen-sm relative overflow-hidden">
                {/* tv showcase */}
                <img className="absolute z-10" src="images/tv.png" />
                <video className="absolute top-[20%] left-[13%] object-cover" 
                autoPlay loop muted>
                    <source src="media/video-tv-in-0819.m4v" type="video/mp4" />
                </video>
                <img className="opacity-0" src="images/tv.png" />

            </div>
        </div>
    );
}