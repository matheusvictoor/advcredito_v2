import { keys } from '../../../keys';

type ResendOptions = {
  from: string;
};

export const resendOptions: ResendOptions = {
  from: keys().EMAIL_FROM
};
