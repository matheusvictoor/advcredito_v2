import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export type ConnectedAccountSecurityAlertEmailProps = {
  appName: string;
  name: string;
  provider: string;
  action: "connected" | "disconnected";
};

export function ConnectedAccountSecurityAlertEmail({
  appName,
  name,
  provider,
  action,
}: ConnectedAccountSecurityAlertEmailProps): React.JSX.Element {
  return (
    <Html>
      <Head />
      <Preview>Alerta de Segurança!</Preview>
      <Tailwind>
        <Body className="m-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              Alerta de Segurança!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá {name},
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              O login '{provider}' foi {action}{" "}
              {action === "disconnected" ? "de" : "para"} sua conta.
            </Text>
            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Você está recebendo esta mensagem porque houve alterações de
              segurança na sua conta {appName}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
