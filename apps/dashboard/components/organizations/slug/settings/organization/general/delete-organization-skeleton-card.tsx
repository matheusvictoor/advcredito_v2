import {
  Card,
  CardContent,
  CardFooter,
  type CardProps,
} from "@workspace/ui/components/card";
import { Separator } from "@workspace/ui/components/separator";
import { Skeleton } from "@workspace/ui/components/skeleton";

export function DeleteOrganizationSkeletonCard(
  props: CardProps,
): React.JSX.Element {
  return (
    <Card {...props}>
      <CardContent className="pt-6">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-5 w-[200px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex w-full justify-end pt-6">
        <Skeleton className="h-9 w-[132px]" />
      </CardFooter>
    </Card>
  );
}
