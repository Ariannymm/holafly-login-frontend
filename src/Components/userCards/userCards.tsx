import React from 'react';
import Card from './card/Card';
import { CardType } from "../../Types/types"

interface UserCardsProps {
    cards: CardType[];
}

const UserCards: React.FC<UserCardsProps> = ({ cards }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cards.map((card: CardType) => (
            <Card key={card.id} cardData={card} />
            ))}
        </div>
    );
};
  
export default UserCards;