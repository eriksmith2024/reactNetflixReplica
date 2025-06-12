import { FaChevronRight } from "react-icons/fa";

export default function SiteLink() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[35vh] text-center">
      <h1 className="text-3xl md:text-6xl font-bold text-text-primary mb-10">
        Compare Original Website
      </h1>

      <a
        href="https://www.netflix.com/gb/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-brand-primary text-text-primary py-[10px] px-8 
                   text-sm rounded-lg hover:bg-opacity-80 transition"
      >
        <span>Click to View</span>
        <FaChevronRight />
      </a>
    </div>
  );
}
