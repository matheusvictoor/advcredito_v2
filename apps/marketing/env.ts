import { createEnv } from '@t3-oss/env-nextjs';

import { keys as routes } from '@workspace/routes/keys';

export const env = createEnv({
  extends: [routes()],
  server: {},
  client: {},
  runtimeEnv: {}
});
