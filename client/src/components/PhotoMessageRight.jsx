import Image from 'next/image'
import YY from '@/images/sample/img_main.jpg'
import { Container } from './Container'

export function PhotoMessageRight({ title, text }) {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 sm:m-6">
            <h2 className="leading-tight">{title}</h2>
            <p className="flex flex-col justify-center text-gray-500 lg:text-xl">
              {text}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image src={YY} alt="" unoptimized height={640} />
          </div>
        </div>
      </Container>
    </section>
  )
}
