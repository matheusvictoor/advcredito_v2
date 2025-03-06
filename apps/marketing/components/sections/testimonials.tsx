'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import { APP_NAME } from '@workspace/common/app';
import { cn } from '@workspace/ui/lib/utils';

import { GridSection } from '~/components/fragments/grid-section';
import { Marquee } from '~/components/fragments/marquee';

const DATA = [
  {
    name: 'David Zhang',
    role: 'VP of Sales at GlobalTech Solutions',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    description: (
      <p>
        {APP_NAME} has revolutionized how we manage customer relationships.{' '}
        <strong>
          Our team efficiency has improved by 75% since implementation.
        </strong>{' '}
        The automated workflows are a game-changer for tech companies.
      </p>
    )
  },
  {
    name: 'Maria Rodriguez',
    role: 'Customer Success Director at Cloud Dynamics',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        {APP_NAME}'s customer prediction model has drastically improved our
        targeting strategy.{' '}
        <strong>We've seen a 50% increase in conversion rates!</strong> Their
        marketing automation features are unmatched.
      </p>
    )
  },
  {
    name: 'James Wilson',
    role: 'Head of Business Development at Velocity Inc',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        As a startup, we needed a system that could scale with us. {APP_NAME}{' '}
        delivers perfectly.{' '}
        <strong>Our sales pipeline visibility has improved tenfold.</strong>{' '}
        Essential tool for any growing business.
      </p>
    )
  },
  {
    name: 'Sarah Kim',
    role: 'Senior Account Executive at Digital First',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    description: (
      <p>
        {APP_NAME}'s multi-language support has made managing global customers
        effortless.{' '}
        <strong>
          Customer communication is now seamless across all regions.
        </strong>{' '}
        Perfect for international teams.
      </p>
    )
  },
  {
    name: 'Marcus Johnson',
    role: 'Sales Operations Manager at Revenue Pulse',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: (
      <p>
        {APP_NAME}'s analytics dashboard gives us unprecedented insights into
        customer behavior.{' '}
        <strong>
          Our customer retention has increased by 40% using their predictive
          analytics.
        </strong>{' '}
        Transformative for financial services.
      </p>
    )
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Revenue Officer at Scale Systems',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: (
      <p>
        {APP_NAME}'s integration with our existing tools has streamlined our
        entire operation.{' '}
        <strong>Customer service response times have been cut in half.</strong>{' '}
        The automation features are exceptional.
      </p>
    )
  },
  {
    name: 'Miguel Santos',
    role: 'Account Management Director at Grow Corp',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: (
      <p>
        {APP_NAME}'s sustainability tracking features help us monitor our
        environmental impact.{' '}
        <strong>
          Perfect for managing eco-conscious customer relationships.
        </strong>{' '}
        Leading the way in sustainable business practices.
      </p>
    )
  },
  {
    name: 'Lisa Thompson',
    role: 'Inside Sales Manager at Quantum Enterprises',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    description: (
      <p>
        {APP_NAME}'s customer segmentation tools have transformed our marketing
        approach.{' '}
        <strong>
          Our targeted campaigns now see 85% higher engagement rates.
        </strong>{' '}
        Revolutionizing how we connect with customers.
      </p>
    )
  },
  {
    name: 'Daniel Park',
    role: 'Business Operations Lead at Swift Solutions',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: (
      <p>
        {APP_NAME}'s HIPAA-compliant features make it perfect for healthcare
        providers.{' '}
        <strong>
          Secure patient relationship management has never been easier.
        </strong>{' '}
        A milestone in healthcare CRM solutions.
      </p>
    )
  },
  {
    name: 'Emma Anderson',
    role: 'Director of Client Relations at Peak Partners',
    img: 'https://randomuser.me/api/portraits/women/73.jpg',
    description: (
      <p>
        {APP_NAME}'s education-focused features have doubled our student
        engagement rates.{' '}
        <strong>
          Perfect for managing student and institution relationships.
        </strong>{' '}
        Transforming educational administration.
      </p>
    )
  },
  {
    name: 'Robert Chen',
    role: 'Sales Enablement Manager at Catalyst Group',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    description: (
      <p>
        {APP_NAME}'s enterprise-grade security features give us complete peace
        of mind. <strong>The most secure CRM solution we've ever used.</strong>{' '}
        Setting new standards in data protection.
      </p>
    )
  },
  {
    name: 'Maya Patel',
    role: 'Customer Experience Director at Apex Solutions',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    description: (
      <p>
        {APP_NAME}'s project management integration has streamlined our creative
        workflow.{' '}
        <strong>Client communication has never been more efficient.</strong>{' '}
        Perfect for creative agencies.
      </p>
    )
  },
  {
    name: "Thomas O'Brien",
    role: 'Sales Strategy Manager at Future Dynamics',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    description: (
      <p>
        {APP_NAME}'s startup-friendly pricing and scalability made it an easy
        choice.{' '}
        <strong>The perfect CRM solution that grows with your business.</strong>{' '}
        Essential for modern startups.
      </p>
    )
  }
];

export function Testimonials(): React.JSX.Element {
  return (
    <GridSection hideVerticalGridLines>
      <div className="container border-x py-20 md:border-none">
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-5xl lg:text-left">
          What people say
        </h2>
        <div className="relative mt-6 max-h-[640px] overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(DATA.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    '[--duration:60s]': i === 1,
                    '[--duration:30s]': i === 2,
                    '[--duration:70s]': i === 3
                  })}
                >
                  {DATA.slice(i * 3, (i + 1) * 3).map((testimonial, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.4,
                        duration: 1
                      }}
                      className="mb-4 flex w-full break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl border bg-background p-4 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    >
                      <div className="select-none text-sm font-normal text-muted-foreground">
                        {testimonial.description}
                        <div className="flex flex-row py-1">
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                          <Star className="size-4 fill-yellow-500 text-yellow-500" />
                        </div>
                      </div>
                      <div className="flex w-full select-none items-center justify-start gap-5">
                        <Image
                          width={40}
                          height={40}
                          src={testimonial.img || ''}
                          alt={testimonial.name}
                          className="size-8 rounded-full ring-1 ring-border ring-offset-4"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            {testimonial.name}
                          </p>
                          <p className="text-xs font-normal text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%" />
        </div>
      </div>
    </GridSection>
  );
}
