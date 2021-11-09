import Image from "next/image";

interface CategoryCardProps {
  label: string;
  image: string;
}

export const CategoryCard = (props: CategoryCardProps) => {
  const { label, image } = props;

  return (
    <div className="w-32 h-32 rounded-lg shadow-md">
      <div className="w-full">
        <Image
          src={`/img/${image}.png`}
          alt={label}
          width={128}
          height={96}
          className="object-cover w-full rounded-t-md"
        />
      </div>
      <h3 className="text-sm font-medium text-center">{label}</h3>
    </div>
  );
};
