export default function DownloadShows() {
    return (
        <div className="px-8 py-16 bg-black text-text-primary text-center md:grid 
        md:grid-cols-2 md:items-center" >
            <div className="md:text-left md:order-last">
                <h2 className="text-3xl md:text-5xl font-bold 
                md:font-black">Download your shows to watch offline</h2>
                <p className="text-lg font-normal mt-4">Save your favorites easily and always have something to watch</p>
            </div>
            <div className="relative flex flex-col items-center max-w-2xl m-auto">
                {/*download showcase */}
                <img className="w-full" src="images/mobile-0819.jpg" />
                <div className="bg-black absolute -bottom-4 max-w-md min-w-[70%] 
                flex items-center gap-4 border-2 p-3 rounded-xl border-dark-territory">
                    <img className="max-h-16" src="images/boxshot.png" />
                    <div className="flex-1 flex flex-col text-left justify-center">
                        <span className="text-sm font-normal
                        text-text-link">Stranger&nbsp;Things</span>
                        <span>Downloading...</span>
                    </div>
                    <img className="w-12 h12" src="images/download-icon.gif" />
                </div>
            </div>
        </div>
    );
}