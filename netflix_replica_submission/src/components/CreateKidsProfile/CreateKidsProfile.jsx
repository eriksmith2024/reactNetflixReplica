export default function CreateKidsProfile(){
    return (
        <div className="px-8 py-14 bg-black text-text-primary text-center md:grid md:grid-cols-2 md:items-center">
            <div className="md:text-left md:order-last">
                <h2 className="text-3xl md:text-5xl font-bold md:font-black">Create profiles for kids</h2>
                <p className="text-lg font-normal mt-4">Send children on adventures with their favourite characters in a space made just for them — free with your membership.</p>
            </div>
            <img className="m-auto mt-10" src="images/children.png" />
        </div>
    );
}