import { IPost } from "@/util/types";

export default function PostCard(props: IPost) {
  return (
    <>
      <span className="text-sm font-semibold uppercase text-topic tracking-wide mb-2 font-body">
        {props.topic}
      </span>

      <h2 className="text-2xl font-header font-bold mb-2 leading-tight">
        {props.title}
      </h2>

      <p className="text-gray-700 text-sm font-body line-clamp-3 mb-4">
        {props.description}
      </p>

      <span className="flex justify-between text-xs text-gray-500 font-body mt-auto">
        {props.date.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}
        {props.edited ?
          <span>
            Edited: {props.edited.toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})}
          </span>
          : <></>
        }
      </span>

    </>
  );
}