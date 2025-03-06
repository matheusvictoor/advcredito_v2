import * as React from 'react';
import Link from 'next/link';

import { APP_NAME } from '@workspace/common/app';
import { routes } from '@workspace/routes';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@workspace/ui/components/accordion';

import { GridSection } from '~/components/fragments/grid-section';

const DATA = [
  {
    question: `What does ${APP_NAME} do?`,
    answer: `This is a demo application built with Achromatic. It will save you time and effort building your next SaaS. Here you would write something like "${APP_NAME} helps you manage customer relationships, organize sales activities and improve service delivery to make your business more efficient and successful."`
  },
  {
    question: 'How will this benefit my business?',
    answer: `By centralizing your customer data and automating tasks, ${APP_NAME} makes it easier to track leads, manage your sales pipeline and collaborate with your team, saving you time and boosting your productivity.`
  },
  {
    question: 'Is my data safe?',
    answer:
      'Your data security is our top priority. We use advanced encryption and follow industry-standard security measures to keep your information protected and compliant.'
  },
  {
    question: 'What kind of integrations are available?',
    answer: `${APP_NAME} supports integration with various business tools, including CRMs, email marketing software and collaboration platforms. Connect with Salesforce, HubSpot and more to create a seamless workflow.`
  },
  {
    question: 'How easy is it to onboard my team?',
    answer:
      'The platform is designed for easy onboarding, with intuitive interfaces and step-by-step guides to help your team get up and running quickly.'
  },
  {
    question: 'What types of businesses can use this?',
    answer: `${APP_NAME} is suitable for businesses of all sizes and industries, from startups to large enterprises, looking to streamline their customer relationship management.`
  },
  {
    question: 'Can I customize this to fit my business needs?',
    answer:
      'Absolutely. You can customize workflows, fields and templates to suit the unique needs of your business.'
  }
];

export function FAQ(): React.JSX.Element {
  return (
    <GridSection>
      <div className="container py-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 hidden text-muted-foreground md:block lg:max-w-[75%]">
              Haven't found what you're looking for? Try{' '}
              <Link
                href={routes.marketing.Contact}
                className="font-normal text-inherit underline hover:text-foreground"
              >
                contacting
              </Link>{' '}
              us, we are glad to help.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-xl flex-col">
            <Accordion
              type="single"
              collapsible
            >
              {DATA.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={index.toString()}
                >
                  <AccordionTrigger className="text-left text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </GridSection>
  );
}
