import { AuthErrorCode } from "@workspace/auth/errors";
import { Provider } from "@workspace/auth/providers.types";
import { Tier } from "@workspace/billing/tier";
import {
  ContactRecord,
  ContactStage,
  FeedbackCategory,
  InvitationStatus,
  Role,
  WebhookTrigger,
  TenantRecord,
} from "@workspace/database";

export const contactStageLabel: Record<ContactStage, string> = {
  [ContactStage.LEAD]: "Lead",
  [ContactStage.QUALIFIED]: "Qualified",
  [ContactStage.OPPORTUNITY]: "Opportunity",
  [ContactStage.PROPOSAL]: "Proposal",
  [ContactStage.IN_NEGOTIATION]: "In negotiation",
  [ContactStage.LOST]: "Lost",
  [ContactStage.WON]: "Won",
};

export const tenantStatusLabel: Record<InvitationStatus, string> = {
  [InvitationStatus.ACCEPTED]: "Conectado",
  [InvitationStatus.PENDING]: "Pendente",
  [InvitationStatus.REVOKED]: "Revogado",
};

export const tenantRecordLabel: Record<ContactRecord, string> = {
  [TenantRecord.PERSON]: "Pessoa Física",
  [TenantRecord.COMPANY]: "Pessoa Jurídica",
};

export const roleLabels: Record<Role, string> = {
  [Role.MEMBER]: "Member",
  [Role.ADMIN]: "Admin",
};

export const feedbackCategoryLabels: Record<FeedbackCategory, string> = {
  [FeedbackCategory.SUGGESTION]: "Suggestion",
  [FeedbackCategory.PROBLEM]: "Problem",
  [FeedbackCategory.QUESTION]: "Question",
};

export const webhookTriggerLabels: Record<WebhookTrigger, string> = {
  [WebhookTrigger.CONTACT_CREATED]: "Contact created",
  [WebhookTrigger.CONTACT_UPDATED]: "Contact updated",
  [WebhookTrigger.CONTACT_DELETED]: "Contact deleted",
};

export const identityProviderLabels: Record<Provider, string> = {
  [Provider.Credentials]: "Credentials",
  [Provider.TotpCode]: "TOTP code",
  [Provider.RecoveryCode]: "Recovery code",
  [Provider.Google]: "Google",
  [Provider.MicrosoftEntraId]: "Microsoft",
};

export const tierLabels: Record<Tier, string> = {
  [Tier.Free]: "Free",
  [Tier.Pro]: "Pro",
  [Tier.ProPendingCancel]: "Pro",
};

export const authErrorLabels: Record<AuthErrorCode, string> = {
  [AuthErrorCode.NewEmailConflict]: "Este e-mail já está em uso.",
  [AuthErrorCode.UnverifiedEmail]: "O e-mail não foi verificado.",
  [AuthErrorCode.IncorrectEmailOrPassword]: "E-mail ou senha incorretos.",
  [AuthErrorCode.TotpCodeRequired]: "Código TOTP é obrigatório.",
  [AuthErrorCode.IncorrectTotpCode]: "O código TOTP está incorreto.",
  [AuthErrorCode.MissingRecoveryCodes]: "Códigos de recuperação ausentes.",
  [AuthErrorCode.IncorrectRecoveryCode]:
    "O código de recuperação está incorreto.",
  [AuthErrorCode.RequestExpired]: "A solicitação expirou.",
  [AuthErrorCode.RateLimitExceeded]: "Limite de requisições excedido.",
  [AuthErrorCode.IllegalOAuthProvider]: "Provedor OAuth inválido.",
  [AuthErrorCode.InternalServerError]:
    "Algo deu errado. Por favor, tente novamente mais tarde.",
  [AuthErrorCode.UnknownError]: "Erro desconhecido.",
};

// ----------------------- REMOVE THIS -----------------------

export const contactRecordLabel: Record<ContactRecord, string> = {
  [ContactRecord.PERSON]: "Person",
  [ContactRecord.COMPANY]: "Company",
};