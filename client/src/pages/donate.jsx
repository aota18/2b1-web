import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { STRIPE_PAYMENT_LINK } from '@/utils/variables'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Donate() {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>Donate - 2B1 Foundation</title>
      </Head>
      <Header />
      {query.success ? (
        <main className="min-h-full relative isolate">
          <Image
            src="https://images.unsplash.com/photo-1584771682827-ed23d771e39b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
            alt="thank-you-for-donation"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top brightness-50"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <h1 className="mt-4 text-6xl font-bold tracking-tight text-white sm:text-5xl">
              Thank you
            </h1>
            <p className="mt-4 text-xl text-white sm:mt-6">
              Thank you for your donation to 2B1 Foundation.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="text-xl font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span> Back to home
              </a>
            </div>
          </div>
        </main>
      ) : (
        <a href={STRIPE_PAYMENT_LINK}>Donate</a>
      )}
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
