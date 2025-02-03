import { ThreadTrackerType } from "@prisma/client";
import { ReplyTrackerEmails } from "@/app/(app)/reply-tracker/ReplyTrackerEmails";
import { getPaginatedThreadTrackers } from "@/app/(app)/reply-tracker/fetch-trackers";
import type { TimeRange } from "@/app/(app)/reply-tracker/TimeRangeFilter";

export async function NeedsAction({
  userId,
  userEmail,
  page,
  timeRange,
}: {
  userId: string;
  userEmail: string;
  page: number;
  timeRange: TimeRange;
}) {
  const { trackers, totalPages } = await getPaginatedThreadTrackers({
    userId,
    type: ThreadTrackerType.NEEDS_ACTION,
    page,
    timeRange,
  });

  return (
    <ReplyTrackerEmails
      trackers={trackers}
      userEmail={userEmail}
      type={ThreadTrackerType.NEEDS_ACTION}
      totalPages={totalPages}
    />
  );
}
