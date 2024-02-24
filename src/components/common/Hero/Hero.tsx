'use client'

import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiPeerlist } from 'react-icons/si'
import { motion } from 'framer-motion'

const RESUME_URL =
  'https://drive.google.com/file/d/1k5QqzTkr-BWEdshWCpsRaAEptWAtUR7X/view?usp=sharing'

export default function Hero() {
  const downloadResume = () => {
    window.open(RESUME_URL, '_blank')
  }

  return (
    <section className="bg-[#0278641a] min-h-fit">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" w-full md:w-4/6 px-8 pt-20 pb-20 md:pb-20"
        >
          <h2 className="text-4xl pb-6 text-slate12">Hello,</h2>
          <h1 className="md:text-6xl text-5xl text-slate12">
            I&apos;m&nbsp;
            <span className="font-extrabold text-mint11">Tahir Ahmed</span>
          </h1>
          <p className="pt-8 text-2xl font-light">
            <span className="font-bold text-mint12">Fullstack Developer</span>,
            with <span className="font-bold text-mint12">5</span> years of
            experience in developing large-scale web apps using{' '}
            <span className="font-semibold text-mint12">react</span>,{' '}
            <span className="font-semibold text-mint12">nodejs</span>, and{' '}
            <span className="font-semibold text-mint12">nextjs</span>
          </p>
          <div className="flex gap-8 pt-12 items-center">
            <button
              onClick={downloadResume}
              className="bg-jade9 hover:bg-jade10 hover:ring-2 ring-offset-2 hover:ring-jade7 transition-colors text-white rounded-[4px] px-8 py-4"
            >
              View Resume
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
              className="text-3xl hover:text-emerald-600 transition-colors"
              rel="tahirahmedt.com"
            >
              <SiPeerlist />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
