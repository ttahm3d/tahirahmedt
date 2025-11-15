export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col justify-center align-center py-20 px-4">
      <h2 className="text-4xl pb-6 text-gray-12">Hello,</h2>
      <h1 className="md:text-6xl text-5xl text-gray-12">
        I&apos;m&nbsp;
        <span className="font-extrabold text-gray-12">Tahir Ahmed</span>
      </h1>
      <p className="pt-8 text-2xl font-light">
        <span className="font-bold text-gray-12">Fullstack Developer</span>,
        with <span className="font-bold text-gray-12">5</span> years of
        experience in developing large-scale web apps using{" "}
        <span className="font-semibold text-gray-12">react</span>,{" "}
        <span className="font-semibold text-gray-12">nodejs</span>, and{" "}
        <span className="font-semibold text-gray-12">nextjs</span>
      </p>
    </section>
  );
}
