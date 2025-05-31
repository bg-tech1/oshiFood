import { CardComponents } from "./CardContents";
import { CardImage } from "./CardImage";

export type CardProps = {
  shopName: string;
  shopImage: string;
  shopUrl: string;
  description: string;
  whoIs: string;
};
export const Card = ({
  shopName,
  shopImage,
  shopUrl,
  description,
  whoIs,
}: CardProps) => {
  return (
    // 使用側でgridにする
    <article className="border-1 rounded-lg border-black m-3 overflow-hidden font-mono">
      <CardImage shopName={shopName} shopImage={shopImage} />
      <CardComponents
        shopName={shopName}
        shopUrl={shopUrl}
        description={description}
        whoIs={whoIs}
      />
    </article>
  );
};
