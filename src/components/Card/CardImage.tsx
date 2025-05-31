type CardImageProps = {
  shopImage: string;
  shopName: string;
};

export const CardImage = ({ shopImage, shopName }: CardImageProps) => {
  return (
    <div className="w-full h-48 object-cover border-b-1 border-gray-400 rounded-t-lg">
      <img
        className="w-full h-full object-cover"
        src={shopImage}
        alt={`${shopName}の画像`}
      />
    </div>
  );
};
