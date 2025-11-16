import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-center py-20 px-4 space-y-1.5 border-b border-gray-6">
      <h2 className="text-4xl pb-6 text-gray-12">Hello,</h2>
      <h1 className="md:text-6xl text-6xl text-gray-12">
        I&apos;m&nbsp;
        <span className="font-extrabold text-accent-10">Tahir Ahmed</span>
      </h1>
      <p className="pt-8 text-2xl">
        <span className="font-bold text-gray-12">Fullstack Developer</span>,
        with <span className="font-bold text-gray-12">7</span> years of hands-on
        experience building scalable web applications using{" "}
        <span className="font-semibold text-gray-12">react</span>,{" "}
        <span className="font-semibold text-gray-12">nodejs</span>, and{" "}
        <span className="font-semibold text-gray-12">nextjs</span>.
      </p>
      <p className="text-2xl py-4">
        Currently employed at{" "}
        <span className="text-orange-500 font-bold">PwC</span> as{" "}
        <span className="font-semibold">Senior Engineer</span> and I&apos;m
        actively seeking new opportunities.
      </p>
      <div className="flex items-center space-x-6">
        <button className="px-4 py-2 w-fit border bg-accent-9 hover:bg-accent-10 cursor-pointer border-accent-7 hover:border-accent-8 text-white rounded-md">
          Download Resume
        </button>
        <div>
          <a
            href="https://www.linkedin.com/in/tahirahmedt"
            target="_blank"
            rel="tahirahmedt.com"
          >
            <FaLinkedin size={44} />
          </a>
        </div>
      </div>
    </section>
  );
}
