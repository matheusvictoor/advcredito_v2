import {
  Card,
  CardContent,
  CardFooter,
  type CardProps
} from '@workspace/ui/components/card';
import { Separator } from '@workspace/ui/components/separator';
import { Skeleton } from '@workspace/ui/components/skeleton';

export function TransactionalEmailsSkeletonCard(
  props: CardProps
): React.JSX.Element {
  return (
    <Card {...props}>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-row items-center justify-between"
            >
              <div className="space-y-[9px]">
                <Skeleton className="h-[17px] w-[110px]" />
                <Skeleton className="h-[19px] w-[220px]" />
              </div>
              <Skeleton className="h-5 w-9 rounded-full" />
            </div>
          ))}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex w-full justify-end pt-6">
        <Skeleton className="h-9 w-16" />
      </CardFooter>
    </Card>
  );
}
