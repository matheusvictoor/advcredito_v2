import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export type WelcomeEmailProps = {
  appName: string;
  name: string;
  getStartedLink: string;
};

export function WelcomeEmail({
  appName,
  name,
  getStartedLink,
}: WelcomeEmailProps): React.JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>Bem-vindo à {appName}!</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Bem-vindo à {appName}!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Sua conta foi criada com sucesso e agora você pode acessar a nossa
              plataforma. Estamos felizes em tê-lo(a) conosco!
            </Text>
            <Section className="my-[32px] text-center">
              <Button
                href={getStartedLink}
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
              >
                Começar agora
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              Caso tenha alguma dúvida, entre em contato com o nosso suporte.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Você recebeu este e-mail porque foi inscrito no sistema {appName}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
