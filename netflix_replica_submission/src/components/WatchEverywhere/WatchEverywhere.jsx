export default function WatchEverywhere(){
    return (
        <div className="px-8 py-14 bg-black text-text-primary text-center md:grid md:grid-cols-2 md:items-center">
            <div className="md:text-left">
                <h2 className="text-3xl md:text-5xl font-bold md:font-black">Watch everywhere</h2>
                <p className="text-lg font-normal mt-4">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="m-auto mt-10 max-w-screen-sm relative overflow-hidden">
                {/* tv showcase */}
                <img className="absolute z-10" src="images/device-pile-in.png" />
                <video className="absolute top-[13%] left-[20%] w-[60%] object-cover" autoPlay loop muted>
                    <source src="media/video-tv-everywhere.m4v" type="video/mp4" />
                </video>
                <img className="opacity-0" src="images/device-pile-in.png" />
            </div>
        </div>
    );
}