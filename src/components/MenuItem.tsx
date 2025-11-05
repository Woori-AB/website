"use client";

export type Props = {
  title: string;
  price: string;
  ingredients?: string;
  allergies?: string;
  abv?: string;
  amount?: string;
};

export default function MenuItem({
  title,
  price,
  ingredients,
  allergies,
  abv,
  amount,
}: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2>
        {title} {abv} {amount && `(${amount})`} {price}
      </h2>
      {ingredients && <span>{ingredients}</span>}
      {allergies && <span className="italic">{allergies}</span>}
    </div>
  );
}
