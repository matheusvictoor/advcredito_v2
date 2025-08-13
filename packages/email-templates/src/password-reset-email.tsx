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

export type PasswordResetEmailProps = {
  appName: string;
  name: string;
  resetPasswordLink: string;
};

export function PasswordResetEmail({
  appName,
  name,
  resetPasswordLink,
}: PasswordResetEmailProps): React.JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>{appName} redefinir sua senha</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Instruções de Redefinição
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Alguém recentemente solicitou uma alteração de senha sua conta{" "}
              {appName}. Se foi você, redefina sua nova senha aqui:
            </Text>
            <Section className="my-[32px] text-center">
              <Button
                className="rounded bg-[#000000] px-5 py-3 text-center text-[12px] font-semibold text-white no-underline"
                href={resetPasswordLink}
              >
                Redefinir senha
              </Button>
            </Section>
            <Text className="text-[14px] leading-[24px] text-black">
              ou copie e cole essa URL em seu navegador:{" "}
              <Link
                href={resetPasswordLink}
                className="text-blue-600 no-underline"
              >
                {resetPasswordLink}
              </Link>
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Se você não quiser alterar sua senha ou não solicitou redefinição
              de senha, simplesmente ignore e apague esta mensagem. Para manter
              sua conta segura, não encaminhe este e-mail para ninguém.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
