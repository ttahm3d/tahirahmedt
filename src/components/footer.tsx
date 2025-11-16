export default function Footer() {
  return (
    <footer className="bg-accent-2 mt-auto">
      <section className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center gap-2">
        <p className="text-center  text-gray-11">
          &copy; {new Date().getFullYear()} Tahir Ahmed. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
