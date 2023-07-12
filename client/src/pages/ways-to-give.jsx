import Head from 'next/head'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Website } from '@/utils/variables'
import { Header } from '@/components/Header'
import backgroundImage from '@/images/sample/img_main.jpg'
import Image from 'next/image'
import { PageHero } from '@/components/PageHero'
import { KeyMessage, SecondaryFeatures } from '@/components/KeyMessage'
import { CardList } from '@/components/CardList'
import { Container } from '@/components/Container'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import ContactUs from '@/components/ContactUs'

export default function WaysToGive() {
  const { t } = useTranslation(['ways-to-give', 'home'])

  return (
    <>
      <Head>
        <title>Ways To Give - {Website.fullname}</title>
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
          <PageHero title={t('home:header.ways_to_give')} />
          <KeyMessage text={t('key_message_detail')} />
          <Container></Container>
          <Container>
            <CardList t={t} />
          </Container>
          {/* <Container>
            <FAQ t={t}/>
          </Container> */}
          <Container>
            <ContactUs t={t} />
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'ways-to-give'])),
      // Will be passed to the page component as props
    },
  }
}
