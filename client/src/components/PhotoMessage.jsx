import Image from 'next/image'

import { Container } from './Container'
import { Button } from './Button'
import { useTranslation } from 'next-i18next'

export function PhotoMessage({ title, text, photo, readMore }) {
  const { t } = useTranslation('home')

  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 md:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Image src={photo} alt="" unoptimized />
          </div>
          <div className="flex flex-col justify-between space-y-12 md:m-6">
            <h2 className="leading-tight">{title}</h2>
            <p className="flex flex-col justify-center text-gray-500 lg:text-lg">
              {text}
            </p>
            {readMore && (
              <Button
                href={'/about'}
                color="primary"
                className="w-full md:w-32"
              >
                {t('btn.read_more')}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
