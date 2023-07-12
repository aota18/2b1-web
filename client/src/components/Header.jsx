import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe } from '@geist-ui/icons'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { LogoB, LogoW } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { useRouter } from 'next/router'
import { Navs } from '@/utils/nav'
import { STRIPE_PAYMENT_LINK } from '@/utils/variables'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@geist-ui/core'
import { useTranslation } from 'next-i18next'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

export function Header() {
  const { t } = useTranslation('home')

  const Navs = [
    [t('header.our_story'), '/about'],
    // [t('header.what_we_do'), '/what-we-do'],
    [t('header.ways_to_give'), '/ways-to-give'],
    [t('header.contact'), '/ways-to-give/#contact'],
  ]
  const { locale, push } = useRouter()

  const isLG = useMediaQuery('lg', { match: 'up' })

  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              {isLG && <LogoW className="h-10 w-auto" />}
              {!isLG && <LogoB className="h-10 w-auto" />}
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="block cursor-pointer text-black lg:hidden"
              locale={locale === 'ko' ? 'en' : 'ko'}
            >
              <Globe />
            </Link>
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top  bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            {Navs.map(([label, href], index) => (
                              <MobileNavLink
                                key={index}
                                href={href}
                                locale={locale}
                              >
                                {label.toUpperCase()}
                              </MobileNavLink>
                            ))}
                          </div>
                          <div className="mt-8 flex flex-col gap-4 text-xl">
                            <Button href={STRIPE_PAYMENT_LINK}>
                              {t('btn.donate')}
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Link
              href="/"
              className="hidden cursor-pointer text-white lg:block"
              locale={locale === 'ko' ? 'en' : 'ko'}
            >
              <Globe />
            </Link>

            <Button
              href={STRIPE_PAYMENT_LINK}
              className="hidden lg:block"
              color="primary"
            >
              {t('btn.donate')}
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
