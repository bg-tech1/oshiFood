import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CardProps } from "../Card/Card";

type AddCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmitCard: (data: CardProps) => void;
};
export const AddCardModal = ({
  isOpen,
  onClose,
  onSubmitCard,
}: AddCardModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CardProps>();
  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);
  const onSubmit: SubmitHandler<CardProps> = (data) => {
    onSubmitCard(data);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4 font-mono">
        <div className="relative bg-white rounded-lg  z-50 w-full max-w-md mx-auto p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* 推しの名前 */}
            <div>
              <label htmlFor="whoIs" className="block text-sm font-medium mb-1">
                推しの名前
              </label>
              <input
                id="whoIs"
                type="text"
                {...register("whoIs", { required: "必須項目です" })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.whoIs ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="例：野口衣織"
              />
              {errors.whoIs && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.whoIs.message}
                </p>
              )}
            </div>

            {/* 店舗名 */}
            <div>
              <label
                htmlFor="shopName"
                className="block text-sm font-medium mb-1"
              >
                店舗名
              </label>
              <input
                id="shopName"
                type="text"
                {...register("shopName", { required: "必須項目です" })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.shopName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="例：千里眼"
              />
              {errors.shopName && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.shopName.message}
                </p>
              )}
            </div>

            {/* 店舗サイト URL */}
            <div>
              <label
                htmlFor="shopUrl"
                className="block text-sm font-medium mb-1"
              >
                店舗サイト
              </label>
              <input
                id="shopUrl"
                type="url"
                {...register("shopUrl", {
                  required: "必須項目です",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "正しいURLを入力してください",
                  },
                })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.shopUrl ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="例：https://example.com"
              />
              {errors.shopUrl && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.shopUrl.message}
                </p>
              )}
            </div>

            {/* 写真（画像URL） */}
            <div>
              <label
                htmlFor="shopImage"
                className="block text-sm font-medium mb-1"
              >
                写真 URL
              </label>
              <input
                id="shopImage"
                type="url"
                {...register("shopImage", {
                  required: "必須項目です",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "画像のURLを入力してください",
                  },
                })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.shopImage ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="例：https://example.com/image.jpg"
              />
              {errors.shopImage && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.shopImage.message}
                </p>
              )}
            </div>

            {/* 詳細 */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-1"
              >
                詳細
              </label>
              <textarea
                id="description"
                rows={4}
                {...register("description", { required: "必須項目です" })}
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  errors.description ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="例：衣織ちゃんがいったお店！"
              />
              {errors.description && (
                <p className="mt-1 text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded px-4 py-2 transition-transform active:scale-95 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "追加中..." : "追加する"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
