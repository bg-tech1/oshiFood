type CardComponentsProps = {
  shopName: string;
  shopUrl: string;
  description: string;
  whoIs: string;
};

export const CardComponents = ({
  shopName,
  shopUrl,
  description,
  whoIs,
}: CardComponentsProps) => {
  return (
    <>
      <div className="mt-1">
        <h2 className="underline underline-offset-2 decoration-gray-400">
          {whoIs}
        </h2>
      </div>
      <div className="mt-1">
        <p className="underline underline-offset-2 decoration-gray-400">店名</p>
        <a
          href={shopUrl}
          className="hover:text-blue-600 cursor-pointer"
          target="_blank"
          rel="noreferrer noopener"
        >
          {shopName}
        </a>
      </div>
      <div className="mt-1">
        <p className="underline underline-offset-2 decoration-gray-400">説明</p>
        <p>{description}</p>
      </div>
    </>
  );
};
