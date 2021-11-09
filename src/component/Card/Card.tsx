import Image from "next/image";

interface CardProps {
  title: string;
  price: number;
  image: string;
}

export const Card = (props: CardProps) => {
  const { title, price, image } = props;

  return (
    <a href="/product/123">
      <div className="p-2 m-auto w-48 bg-white rounded-2xl shadow-md">
        <div className="pt-2 m-auto w-full h-36">
          <Image
            src={`/img/${image}.png`}
            alt={title}
            width={176}
            height={136}
            className="object-cover w-full h-full rounded-lg"
          />
          {/* <img src="/img/1.png" alt="kucing" className="object-cover w-full h-full rounded-lg" /> */}
        </div>
        <div className=" rounded-lg">
          <p className=" mt-1 text-base font-bold text-gray-600">{title}</p>
          <div className=" flex justify-between items-center">
            <p className="text-gray-800">Rp. {price}</p>
          </div>
        </div>
      </div>
    </a>
  );
};
