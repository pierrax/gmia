'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Heading, Lead, Subheading } from '@/components/text'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  MinusIcon,
} from '@heroicons/react/16/solid'
import { useState } from 'react'

const tiers = [
  {
    name: 'Starter' as const,
    slug: 'starter',
    description: 'Une automatisation par mois pour créer, améliorer ou dépanner vos workflows… dès que vous en avez besoin.',
    priceMonthly: 499,
    href: '#',
    highlights: [
      { description: '1 automatisation par mois' },
      { description: 'Livraison sous 5 jours' },
      { description: 'Maintenance technique incluse' },
      { description: "Formation à l'outil n8n" },
      { description: 'Documentation du workflow', disabled: true },
      { description: 'Support prioritaire', disabled: true },
      { description: 'Echange stratégique mensuel', disabled: true },
    ],
    features: [
      { section: 'Features', name: '1 automatisation par mois', value: 1 },
      { section: 'Features', name: 'Livraison sous 5 jours', value: 72 },
      { section: 'Features', name: 'Support par email', value: 'Select' },
      { section: 'Features', name: 'Contacts', value: 100 },
      { section: 'Features', name: 'AI assisted outreach', value: false },
      { section: 'Analysis', name: 'Competitor analysis', value: false },
      { section: 'Analysis', name: 'Dashboard reporting', value: false },
      { section: 'Analysis', name: 'Community insights', value: false },
      { section: 'Analysis', name: 'Performance analysis', value: false },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: false },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Growth' as const,
    slug: 'growth',
    description: '',
    priceMonthly: 999,
    href: '#',
    highlights: [
      { description: 'Up to 10 team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 50 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: '5 competitor analyses per month' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 10 },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 1000 },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: '5 / month' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: false },
    ],
  },
  {
    name: 'Enterprise' as const,
    slug: 'enterprise',
    description: 'Added flexibility to close deals at scale.',
    priceMonthly: 2999,
    href: '#',
    highlights: [
      { description: 'Unlimited active team members' },
      { description: 'Unlimited deal progress boards' },
      { description: 'Source leads from over 100 verified platforms' },
      { description: 'RadiantAI integrations' },
      { description: 'Unlimited competitor analyses' },
    ],
    features: [
      { section: 'Features', name: 'Accounts', value: 'Unlimited' },
      { section: 'Features', name: 'Deal progress boards', value: 'Unlimited' },
      { section: 'Features', name: 'Sourcing platforms', value: '100+' },
      { section: 'Features', name: 'Contacts', value: 'Unlimited' },
      { section: 'Features', name: 'AI assisted outreach', value: true },
      { section: 'Analysis', name: 'Competitor analysis', value: 'Unlimited' },
      { section: 'Analysis', name: 'Dashboard reporting', value: true },
      { section: 'Analysis', name: 'Community insights', value: true },
      { section: 'Analysis', name: 'Performance analysis', value: true },
      { section: 'Support', name: 'Email support', value: true },
      { section: 'Support', name: '24 / 7 call center support', value: true },
      { section: 'Support', name: 'Dedicated account manager', value: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Trois abonnements, des possibilités infinies.</Heading>
      <Lead className="mt-6">
        Des automatisations puissantes, sans devis, sans attente, sans prise de tête.<br />
        Un abonnement mensuel pour créer, améliorer ou dépanner vos workflows… dès que vous en avez besoin.
      </Lead>
    </Container>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ${tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>EUR</p>
              <p>par mois</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>Faire un audit gratuit</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Start selling with:
            </h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-3.75 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

function PricingTable({
  selectedTier,
  setSelectedTier,
}: {
  selectedTier: (typeof tiers)[number]
  setSelectedTier: React.Dispatch<React.SetStateAction<(typeof tiers)[number]>>
}) {
  return (
    <Container className="py-24">
      <table className="w-full text-left">
        <caption className="sr-only">Pricing plan comparison</caption>
        <colgroup>
          <col className="w-3/5 sm:w-2/5" />
          <col
            data-selected={selectedTier === tiers[0] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[1] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
          <col
            data-selected={selectedTier === tiers[2] ? true : undefined}
            className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
          />
        </colgroup>
        <thead>
          <tr className="max-sm:hidden">
            <td className="p-0" />
            {tiers.map((tier) => (
              <th
                key={tier.slug}
                scope="col"
                data-selected={selectedTier === tier ? true : undefined}
                className="p-0 data-selected:table-cell max-sm:hidden"
              >
                <Subheading as="div">{tier.name}</Subheading>
              </th>
            ))}
          </tr>
          <tr className="sm:hidden">
            <td className="p-0">
              <div className="relative inline-block">
                <Menu>
                  <MenuButton className="flex items-center justify-between gap-2 font-medium">
                    {selectedTier.name}
                    <ChevronUpDownIcon className="size-4 fill-gray-900" />
                  </MenuButton>
                  <MenuItems
                    anchor="bottom start"
                    className="min-w-(--button-width) rounded-lg bg-white p-1 shadow-lg ring-1 ring-gray-200 [--anchor-gap:6px] [--anchor-offset:-4px] [--anchor-padding:10px]"
                  >
                    {tiers.map((tier) => (
                      <MenuItem key={tier.slug}>
                        <button
                          onClick={() => setSelectedTier(tier)}
                          data-selected={
                            tier === selectedTier ? true : undefined
                          }
                          className="group flex w-full items-center gap-2 rounded-md px-2 py-1 data-focus:bg-gray-200"
                        >
                          {tier.name}
                          <CheckIcon className="hidden size-4 group-data-selected:block" />
                        </button>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                  <ChevronUpDownIcon className="size-4 fill-gray-900" />
                </div>
              </div>
            </td>
            <td colSpan={3} className="p-0 text-right">
              <Button variant="outline" href={selectedTier.href}>
                Get started
              </Button>
            </td>
          </tr>
          <tr className="max-sm:hidden">
            <th className="p-0" scope="row">
              <span className="sr-only">Get started</span>
            </th>
            {tiers.map((tier) => (
              <td
                key={tier.slug}
                data-selected={selectedTier === tier ? true : undefined}
                className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
              >
                <Button variant="outline" href={tier.href}>
                  Get started
                </Button>
              </td>
            ))}
          </tr>
        </thead>
        {[...new Set(tiers[0].features.map(({ section }) => section))].map(
          (section) => (
            <tbody key={section} className="group">
              <tr>
                <th
                  scope="colgroup"
                  colSpan={4}
                  className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                >
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                    {section}
                  </div>
                </th>
              </tr>
              {tiers[0].features
                .filter((feature) => feature.section === section)
                .map(({ name }) => (
                  <tr
                    key={name}
                    className="border-b border-gray-100 last:border-none"
                  >
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {name}
                    </th>
                    {tiers.map((tier) => {
                      let value = tier.features.find(
                        (feature) =>
                          feature.section === section && feature.name === name,
                      )?.value

                      return (
                        <td
                          key={tier.slug}
                          data-selected={
                            selectedTier === tier ? true : undefined
                          }
                          className="p-4 data-selected:table-cell max-sm:hidden"
                        >
                          {value === true ? (
                            <>
                              <CheckIcon className="size-4 fill-green-600" />
                              <span className="sr-only">
                                Included in {tier.name}
                              </span>
                            </>
                          ) : value === false || value === undefined ? (
                            <>
                              <MinusIcon className="size-4 fill-gray-400" />
                              <span className="sr-only">
                                Not included in {tier.name}
                              </span>
                            </>
                          ) : (
                            <div className="text-sm/6">{value}</div>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
            </tbody>
          ),
        )}
      </table>
    </Container>
  )
}

export function Pricing() {
  const [selectedTier, setSelectedTier] = useState(tiers[0])

  return (
    <>
      <Header />
      <PricingCards />
      <PricingTable selectedTier={selectedTier} setSelectedTier={setSelectedTier} />
    </>
  )
}
