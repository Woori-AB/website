export type Props = {
  title: string;
  className?: string;
};

export default function MenuTitle({ title, className: cn }: Props) {
  return (
    <div className={cn}>
      <h1 className="text-center">{title}</h1>
    </div>
  );
}
