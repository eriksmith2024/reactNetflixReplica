import { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

export default function Question({question, answer}) {

    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <div className="mb-2 text-left">
            <div onClick={()=>setShowAnswer(prev => !prev)} className="bg-dark p-6 flex justify-between items-center rounded-t">
                {/* question */}
                <span className="text-lg md:text-2xl font-normal">{question}</span>
                <span className={`text-2xl md:text-3xl ${(showAnswer && "rotate-45")} transition-all`}><IoAddSharp /></span>
            </div>
            {
                showAnswer && (
                    <div className="p-6 bg-dark mt-[1px]">
                        {/* answer */}
                        <span className="text-lg md:text-2xl font-normal">{answer}</span>
                    </div>
                )
            }
        </div>
    );
}