import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Website } from '@/utils/variables'
import { Header } from '@/components/Header'
import backgroundImage from '@/images/sample/img_main.jpg'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { PageHero } from '@/components/PageHero'
import { History } from '@/components/History'
import { Footer } from '@/components/Footer'
import { KeyMessage } from '@/components/KeyMessage'

export default function About() {
  const { locale, locales, defaultLocale, asPath } = useRouter()

  const { t } = useTranslation(['about', 'home'])

  return (
    <>
      <Head>
        <title>About us - {Website.fullname}</title>
      </Head>
      <Header />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 -bottom-14 -top-48 h-72 translate-y-48 overflow-hidden lg:h-96 lg:translate-y-[0%]">
            <Image
              className="absolute brightness-70"
              src={backgroundImage}
              alt=""
              priority
              unoptimized
              width={1920}
            />
          </div>
          <PageHero title={t('home:header.our_story')} />

          <section
            id="secondary-features"
            aria-label="Features for building a portfolio"
            className="py-20 sm:py-32"
          >
            <Container>
              <div className="grid grid-cols-1 gap-8">
                <div className=" flex w-full flex-col items-center justify-center">
                  <h1 className="text-3xl font-extrabold">2B1 Foundation </h1>
                </div>
                <div className="mt-8 flex flex-col items-center">
                  <p className="max-w-3xl  text-lg text-gray-600">
                    {t('paragraph.first')}
                  </p>

                  <p className="max-w-3xl text-lg  text-gray-600">
                    {t('paragraph.second')}
                  </p>

                  <p className="max-w-3xl text-lg  text-gray-600">
                    {t('paragraph.third')}
                  </p>
                </div>

                <KeyMessage text={t('paragraph.key')} />
              </div>
            </Container>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'about'])),
      // Will be passed to the page component as props
    },
  }
}
