import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { KeyMessage } from '@/components/KeyMessage'
import { PageHero } from '@/components/PageHero'
import { PhotoMessage } from '@/components/PhotoMessage'
import { Website } from '@/utils/variables'
import backgroundImage from '@/images/sample/img_main.jpg'
import HomelessImg from '@/images/sample/img_main.jpg'
import Head from 'next/head'
import Image from 'next/image'
import { PhotoMessageRight } from '@/components/PhotoMessageRight'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function WhatWeDo() {
  const { t } = useTranslation(['what-we-do', 'home'])

  return (
    <>
      <Head>
        <title>{Website.fullname} - Invest at the perfect time.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
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
              width={1800}
            />
          </div>
          <PageHero title={t('home:header.what_we_do')} />
          <KeyMessage
            title={t('key_message1_title')}
            text={t('key_message1_detail')}
          />
          <PhotoMessage
            title={t('street_people_title')}
            text={t('street_people_detail')}
            photo={HomelessImg}
          />
          <KeyMessage
            title={t('key_message2_title')}
            text={t('key_message2_detail')}
          />
          <PhotoMessageRight
            title={t('home:mission_title')}
            text={t('home:mission_detail')}
          />
          <CallToAction />
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'what-we-do'])),
      // Will be passed to the page component as props
    },
  }
}
