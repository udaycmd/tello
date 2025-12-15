import Link from "next/link";
import spaceData from "@/public/data/spaces.json";
import Image from "next/image";

type Space = {
    title: string;
    subspaces: string[];
};

const spaces = spaceData as Space[];

export default function Spaceman() {
    const discussions = [
        "demo",
        "discussion",
        "very long title of this discussion this is getting very long...",
        "i am here",
        "please don't hurt me",
        "touch me daddy!",
        "touch me daddy!",
        "touch me daddy!",
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-6 gap-2 border border-emerald-700 p-7 rounded-sm mx-auto w-[90%] sm:container mb-15 text-gray-900 bg-purple-100">
            <div className="col-span-1 md:col-span-3 row-span-6 p-1">
                <div className="text-sm font-bold rounded-xs p-1 text-center md:text-left md:text-xl">
                    Spaces
                </div>
                {spaces.map((s) => (
                    <ul key={s.title} className="p-1">
                        <li className="pb-2 text-purple-700 font-bold text-sm underline">
                            {s.title}
                        </li>
                        {s.subspaces.map((sub) => (
                            <Link
                                key={sub}
                                href="/not_found"
                                className="text-xs hover:bg-blue-400 hover:font-bold rounded-xs block w-fit"
                            >
                                {sub}
                            </Link>
                        ))}
                    </ul>
                ))}
            </div>

            <div className="col-span-1 md:col-span-2 row-span-6 md:col-start-4 p-1 grid grid-cols-1 lg:grid-cols-3 gap-2 content-start">
                <div className="col-span-full text-sm font-bold rounded-xs p-1 text-center md:text-left md:text-xl mb-2">
                    Trending discussions
                </div>
                {discussions.map((d, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center gap-1 cursor-pointer"
                    >
                        <div className="relative w-70 md:w-full aspect-square overflow-hidden rounded-xs border border-gray-400">
                            <Image
                                src="/tello.webp"
                                alt="img"
                                fill
                                className="object-contain transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="text-xs w-full text-center font-bold line-clamp-1 leading-tight text-red-700">
                            {d}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
