'use client';

import * as React from 'react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

import { Button } from '@workspace/ui/components/button';
import { Card, CardContent } from '@workspace/ui/components/card';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import { toast } from '@workspace/ui/components/sonner';
import { Textarea } from '@workspace/ui/components/textarea';

import { GridSection } from '~/components/fragments/grid-section';
import { SiteHeading } from '~/components/fragments/site-heading';

export function Contact(): React.JSX.Element {
  const handleSendMessage = (): void => {
    toast.error("I'm not implemented yet.");
  };
  return (
    <GridSection>
      <div className="container space-y-20 py-20">
        <SiteHeading
          badge="Contact"
          title={
            <>
              We&apos;d love to hear
              <br /> from you!
            </>
          }
        />
        <div className="lg:container lg:max-w-6xl ">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
            <div className="order-2 space-y-8 text-center lg:order-1 lg:w-1/2 lg:text-left">
              <h3 className="m-0 hidden max-w-fit text-4xl font-semibold lg:block">
                Get in touch
              </h3>
              <p className="text-muted-foreground lg:max-w-[80%]">
                If you have any questions, don't hesitate to contact our team.
                We'll get back to you within 48 hours.
              </p>
              <div className="space-y-4">
                <h4 className="hidden text-lg font-medium lg:block">
                  Contact details
                </h4>
                <div className="flex flex-col items-center gap-3 lg:items-start">
                  <ContactInfo
                    icon={PhoneIcon}
                    text="(123) 34567890"
                  />
                  <ContactInfo
                    icon={MailIcon}
                    text="your-email@example.com"
                  />
                  <ContactInfo
                    icon={MapPinIcon}
                    text="123 Main St, City, Country"
                  />
                </div>
              </div>
            </div>
            <Card className="order-1 mx-auto w-full max-w-lg shadow-lg lg:order-2 lg:w-1/2">
              <CardContent className="flex flex-col gap-6 p-6 lg:p-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                      id="firstname"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="col-span-2 grid w-full items-center gap-1.5 sm:col-span-1">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                      id="lastname"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="grid w-full gap-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here."
                    rows={6}
                  />
                </div>
                <Button
                  type="button"
                  className="w-full"
                  onClick={handleSendMessage}
                >
                  Send message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </GridSection>
  );
}

type ContactInfoProps = {
  icon: React.ElementType;
  text: string;
};

function ContactInfo({
  icon: Icon,
  text
}: ContactInfoProps): React.JSX.Element {
  return (
    <div className="flex items-center gap-2 text-sm lg:w-64">
      <Icon className="size-4 shrink-0 text-muted-foreground" />
      <span>{text}</span>
    </div>
  );
}
