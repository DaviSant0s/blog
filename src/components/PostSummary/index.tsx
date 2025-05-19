import { formatDatetime, formatDistanceToNow } from "@/utils/format-datetime"
import PostHeading from "../PostHeading"

type PostSummaryProps = {
  postHeading: 'h1' | 'h2';
  createdAt: string;
  postLink: string
  title: string
  excerpt: string
}

export default function PostSummary({createdAt, postLink, title, excerpt, postHeading}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight "
        dateTime={createdAt}
        title={formatDatetime(createdAt)}
      >
        {formatDistanceToNow(createdAt)}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {title}
      </PostHeading>

      <p>{excerpt}</p>
    </div>
  );
}
