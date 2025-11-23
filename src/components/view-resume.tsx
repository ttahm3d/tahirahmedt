"use client";
import { FaLinkedin } from "react-icons/fa";

const DRIVE_URL =
  "https://drive.google.com/file/d/1WHRCfOs2aZqrCGroTTlLvJHGs4I4dw8c/view?usp=drive_link";

export default function ViewResume() {
  const onViewResume = () => {
    window.open(DRIVE_URL, "_blank");
  };
  return (
    <div className="flex items-center space-x-6">
      <button
        onClick={onViewResume}
        className="px-4 py-2 w-fit border bg-accent-11 dark:bg-accent-9/55 hover:bg-accent-11 transition cursor-pointer border-accent-7 hover:border-accent-8 text-white font-semibold rounded-md"
      >
        View Resume
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
  );
}
