import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Website } from '@/utils/variables'
import { PhotoMessage } from '@/components/PhotoMessage'
import { Container } from '@/components/Container'
import MissionOneness from '@/images/sample/mission-oneness.jpeg'
import MissionReconciliation from '@/images/sample/mission-reconciliation.jpeg'
import MissionMovement from '@/images/sample/mission-movement.webp'
import MissionImg from '@/images/sample/mission-penisula.jpg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'
import { useMemo } from 'react'

const Map = ({ center }) => {
  const containerStyle = {
    width: '1280px',
    height: '396px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <GoogleMap
      zoom={15}
      center={center}
      mapContainerClassName="map-container"
      mapContainerStyle={containerStyle}
    >
      <MarkerF position={center} title="2b1 Foundation" />
    </GoogleMap>
  )
}

export default function Home() {
  const center = useMemo(() => ({ lat: 49.19636, lng: -122.84648 }), [])

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const { t } = useTranslation('home')

  const blogPosts = [
    {
      id: 1,
      title: t('mission.oneness.title'),
      time: '10:00AM - 01:00PM',
      href: '#',
      desc: t('mission.oneness.desc'),
      imageUrl: MissionOneness,
      date: t('ministry.street_service.date'),
      datetime: '2020-03-16',
    },
    {
      id: 2,
      title: t('mission.reconciliation.title'),
      time: '04:00PM',
      href: '#',
      desc: t('mission.reconciliation.desc'),
      imageUrl: MissionReconciliation,
      date: t('ministry.busking_worship.date'),
      datetime: '2020-03-16',
    },
    {
      id: 3,
      title: t('mission.movement.title'),
      time: '04:00PM',
      href: '#',
      desc: t('mission.movement.desc'),
      imageUrl: MissionMovement,
      date: t('ministry.busking_worship.date'),
      datetime: '2020-03-16',
    },
    // More posts...
  ]

  const title = t('story_title')
  const text = t('story_detail')

  return (
    <>
      <Head>
        <title>{Website.fullname}</title>
        <meta name="description" content="" />
      </Head>
      <Header />
      <main>
        <Hero />
        {/* <ImageList /> */}
        <PhotoMessage
          title={title}
          text={text}
          photo={MissionImg}
          readMore={true}
        />

        {/* Blog section */}
        <Container className="my-16">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600"></p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                  src={post.imageUrl}
                  alt="post"
                  className="absolute inset-0 -z-10 h-full w-full object-cover brightness-100"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <h3 className="mt-3 text-2xl font-semibold leading-6 text-white">
                  <div>
                    <span className="absolute inset-0" />
                    {post.title}
                  </div>
                </h3>
                <h3 className="text-sm leading-6 text-white">
                  <div>
                    <span className="absolute inset-0" />
                    {post.desc}
                  </div>
                </h3>
              </article>
            ))}
          </div>
        </Container>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      // Will be passed to the page component as props
    },
  }
}
