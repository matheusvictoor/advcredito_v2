import * as React from "react";

import { BusinessHoursCard } from "~/components/organizations/slug/settings/organization/general/business-hours-card";
import { getBusinessHours } from "~/data/organization/get-business-hours";

export default async function BusinessHoursPage(): Promise<React.JSX.Element> {
  const businessHours = await getBusinessHours();
  return <BusinessHoursCard businessHours={businessHours} />;
}
