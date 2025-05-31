import { useEffect, useState } from "react";
import { Card, type CardProps } from "../../../components/Card/Card";
import { AddCardModal } from "../../../components/Modal/AddCardModal";
import { ModalButton } from "../../../components/Modal/ModalButton";
import { NavBar } from "../../../components/NavBar";
import { NAV_ITEMS } from "../../../constants/navigation.constants";
import { fetchCards, insertCard } from "../api/cardApi";

export const TopPage = () => {
  const [isLodadingCards, setIsLoadingCards] = useState(false);
  const [hasErrorCards, setHasErrorCards] = useState(false);
  useEffect(() => {
    const loadCards = async () => {
      setIsLoadingCards(true);
      setHasErrorCards(false);
      const { data, error } = await fetchCards();
      if (error) {
        setHasErrorCards(true);
      } else if (data) {
        setCardProps(data as CardProps[]);
      }
      setIsLoadingCards(false);
    };
    loadCards();
  }, []);

  const handleSubmmitCard = async (data: CardProps) => {
    const { error } = await insertCard(data);
    if (!error) {
      setCardProps((prev) => [data, ...prev]);
    } else {
      alert("カードの通知に失敗しました");
    }
  };

  const items = NAV_ITEMS;
  const [cardProps, setCardProps] = useState<CardProps[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleCardModal = () => setIsOpen(!isOpen);
  return (
    <div className="bg-[#fff8e1] min-h-screen">
      <NavBar items={items} />
      <div className="w-full px-30 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {isLodadingCards && <div>読み込み中...</div>}
        {hasErrorCards && <div>カードの取得に失敗しました</div>}
        {cardProps.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <div className="fixed bottom-5 right-5 z-50">
        <ModalButton onClick={handleCardModal} />
      </div>
      <AddCardModal
        isOpen={isOpen}
        onClose={handleCardModal}
        onSubmitCard={handleSubmmitCard}
      />
    </div>
  );
};
