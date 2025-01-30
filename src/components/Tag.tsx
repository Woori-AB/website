export type TagType =
  | "General"
  | "Mental game"
  | "No Limit Hold'em"
  | "Pot Limit Omaha";

type Props = {
  tagType: TagType;
};

export default function Tag({ tagType }: Props) {
  return (
    <div
      data-testid="Tag"
      className="inline-flex text-xs font-bold text-gray-100 bg-gray-600 rounded px-2 py-1"
    >
      {tagType}
    </div>
  );
}
