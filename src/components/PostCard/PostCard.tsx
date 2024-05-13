type PostCardProps = {
  topic: string;
  description: string;
  date: Date;
}

export default function PostCard(props: PostCardProps) {
  return (
    <div>
      {props.topic}
      {props.description}
      {new Date(props.date.getTime() - props.date.getTimezoneOffset() * 60000).toISOString()}
    </div>
  );
}