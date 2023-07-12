import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { STRIPE_PAYMENT_LINK } from '@/utils/variables'
import { useTranslation } from 'next-i18next'

export function CallToAction() {
  const { t } = useTranslation('home')
  return (
    <section
      id="get-free-shares-today"
      className="relative mx-6 overflow-hidden bg-black bg-no-repeat py-16 sm:py-16"
    >
      <Container className="relative">
        <div className="mx-auto flex max-w-full flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t('support.title')}
          </h2>
          <p className="mt-4 flex w-1/2 items-center text-xl text-gray-300">
            {t('support.detail')}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={STRIPE_PAYMENT_LINK} color="primary">
              {t('btn.donate')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
