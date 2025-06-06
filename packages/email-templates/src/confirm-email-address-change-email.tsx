import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export type ConfirmEmailAddressChangeEmailProps = {
  name: string;
  confirmLink: string;
};

export function ConfirmEmailAddressChangeEmail({
  name,
  confirmLink,
}: ConfirmEmailAddressChangeEmailProps): React.JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>Confirm new email address</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Confirm new email address
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              To complete your email address change request, you must confirm
              your new email address.
            </Text>
            <Section className="my-[32px] text-center">
              <Button
                href={confirmLink}
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              >
                Confirm new email
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              or copy and paste this URL into your browser:{" "}
              <Link href={confirmLink} className="text-blue-600 no-underline">
                {confirmLink}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              If you don't want to change your email address or didn't request
              this, just ignore and delete this message. To keep your account
              secure, please don't forward this email to anyone.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
