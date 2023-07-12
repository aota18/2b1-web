import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

export function NavLinks() {
  const { t } = useTranslation('home')

  const Navs = [
    [t('header.home'), '/'],
    [t('header.our_story'), '/about'],
    // [t('header.what_we_do'), '/what-we-do'],
    [t('header.ways_to_give'), '/ways-to-give'],
    [t('header.contact'), '/ways-to-give/#contact'],
  ]

  let [hoveredIndex, setHoveredIndex] = useState(null)

  return Navs.map(([label, href], index) => (
    <Link
      key={label}
      href={href}
      className="lg: relative -mx-3 -my-2 px-3 py-2 text-xl font-extrabold text-gray-700 text-white transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.span
            className="absolute inset-0 bg-gray-100"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.15 } }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <span className="relative z-10">{label.toUpperCase()}</span>
    </Link>
  ))
}
