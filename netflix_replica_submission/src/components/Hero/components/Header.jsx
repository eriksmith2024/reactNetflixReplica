export default function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-6">
            <img className="w-20 md: w-36" src="images/Netflix_Logo_PMS.png" />
            <div>
                {/*buttons*/}
                <button className="bg-brand-primary text-text-primary py-1 px-4 text-sm rounded">
                    Sign In</button> 
            </div>
        </header>
    );
}