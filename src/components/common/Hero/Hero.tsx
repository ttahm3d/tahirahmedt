'use client'

import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiPeerlist } from 'react-icons/si'

const RESUME_URL =
  'https://drive.google.com/file/d/1k5QqzTkr-BWEdshWCpsRaAEptWAtUR7X/view?usp=sharing'

export default function Hero() {
  const downloadResume = () => {
    window.open(RESUME_URL, '_blank')
  }

  return (
    <section className="bg-[url(/heroblob-mobile.svg)] md:bg-[url(/heroblob-desktop.svg)] min-h-fit h-full bg-[length:60vw_30vh] md:bg-[length:40vw_75vh] bg-right-top bg-no-repeat">
      <div className="max-w-5xl mx-auto">
        <div className=" w-full md:w-3/5 px-8 pt-36 pb-32 md:pb-20">
          <h2 className="text-4xl pb-6 text-gray-600">Hello,</h2>
          <h1 className="text-7xl text-gray-600 font-light">
            I&apos;m&nbsp;
            <span className="font-bold text-purple-600">Tahir Ahmed</span>
          </h1>
          <p className="pt-4">
            <span className="font-bold text-fuchsia-600">
              Fullstack Developer
            </span>
            , with <span className="font-bold text-purple-600">5</span> years of
            experience in developing large-scale web apps using{' '}
            <span className="font-semibold">react</span>,{' '}
            <span className="font-semibold">nodejs</span>, and{' '}
            <span className="font-semibold">nextjs</span>
          </p>
          <div className="flex gap-2 pt-4 items-center">
            <button
              onClick={downloadResume}
              className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-4 py-2 rounded-md"
            >
              Hire me
            </button>
            <a
              href="https://www.linkedin.com/in/tahirahmedt"
              target="_blank"
              className="text-3xl hover:text-blue-700 transition-colors"
              rel="tahirahmedt.com"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://peerlist.io/tahirahmedt"
              target="_blank"
              className="text-3xl hover:text-green-800 transition-colors"
              rel="tahirahmedt.com"
            >
              <SiPeerlist />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
