const links = [
    {
        title: "FAQ",
        href: "#"
    },
    {
        title: "Help Center",
        href: "#"
    },
    {
        title: "Account",
        href: "#"
    },
    {
        title: "Media Center",
        href: "#"
    },
    {
        title: "Investor Relations",
        href: "#"
    },
    {
        title: "Jobs",
        href: "#"
    },
    {
        title: "Ways to Watch",
        href: "#"
    },
    {
        title: "Terms of Use",
        href: "#"
    },
    {
        title: "Privacy",
        href: "#"
    },
    {
        title: "Cookie Preferences",
        href: "#"
    },
    {
        title: "Corporate Information",
        href: "#"
    },
    {
        title: "Contact Us",
        href: "#"
    },
    {
        title: "Speed Test",
        href: "#"
    },
    {
        title: "Legal Notices",
        href: "#"
    },
    {
        title: "Only on Netflix",
        href: "#"
    }
];

export default function Footer() {
    return (
        <div className="px-8 py-8 bg-black text-white-alpha-70 text-sm font-normal">
            <div className="mb-8">
                Questions? Call <a href="tel:000-800-919-1694" className="text-base underline">000-800-919-1694</a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    links.map((link, index) => (
                        <a key={index} href={link.href} className="underline">{link.title}</a>
                    ))
                }
            </div>


        </div>
    );
}