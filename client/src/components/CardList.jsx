import { IconHandsPray, IconPeopleCarryBox } from '@/utils/icons'

import { Heart, Gift } from '@geist-ui/icons'
import { Button } from './Button'
import { STRIPE_PAYMENT_LINK } from '@/utils/variables'

export function CardList({ t }) {
  const features = [
    {
      name: t('ways.prayer'),
      description: t('ways.prayer_detail'),
      icon: IconHandsPray,
      buttonText: t('home:btn.learn_more'),
      href: '/',
    },
    // {
    //   name: t('ways.volunteer'),
    //   description: t('ways.volunteer_detail'),
    //   icon: IconPeopleCarryBox,
    //   buttonText: t('home:btn.learn_more'),
    //   href: '/',
    // },
    {
      name: t('ways.support'),
      description: t('ways.support_detail'),
      icon: Heart,
      buttonText: t('home:btn.donate'),
      href: STRIPE_PAYMENT_LINK,
    },
    // {
    //   name: t('ways.donate'),
    //   description:
    //   t('ways.donate_detail'),
    //   icon: Gift,
    //   buttonText: t('home:btn.contact'),
    //   href: '/',
    // },
  ]

  return (
    <div className="mx-auto mt-16 grid max-w-2xl list-none grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
      {features.map((feature) => (
        <li key={feature.name} className="  border border-gray-200 p-8">
          <feature.icon className="h-8 w-8" />
          <h3 className="mt-6 font-semibold text-gray-900">{feature.name}</h3>
          <p className="mt-2 text-gray-700">{feature.description}</p>

          <Button href={feature.href}>{feature.buttonText}</Button>
        </li>
      ))}
    </div>
  )
}
