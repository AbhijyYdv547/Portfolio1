import Link from "next/link"; // Correct import for Next.js

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20" id="hero">
            <div className=" text-center tracking-wide flex justify-center items-center flex-col gap-2.5">
                <span className="text-4xl sm:text-6xl lg:text-7xl">
                  Abhijay yadav
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-4xl">
                    {" "}
                    Fullstack Web Developer | Devops Enthusiast
                </span>
            </div>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                A full-stack developer who loves building real-time, scalable web apps with clean design and solid architecture. I care about performance, simplicity, and creating things that just work.
            </p>
            <div className="flex justify-center my-10">
                <Link
                    href="/signup"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-4 mx-3 rounded-md text-white font-medium hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
                >
                    Start for free
                </Link>
                <Link
                    href="/docs"
                    className="py-3 px-4 mx-3 rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-all duration-200"
                >
                    Learn more
                </Link>
            </div>
            <div className="flex mt-10 justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-blue-500 shadow-sm shadow-blue-400 mx-2 my-4"
                >
                    <source src="/video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-lg w-1/2 border border-blue-500 shadow-sm shadow-blue-400 mx-2 my-4"
                >
                    <source src="/video2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;