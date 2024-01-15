import { useEffect, useState } from 'react';
import { useAuth } from "../Auth/AuthProvider";
import { API_URL } from "../Auth/constants";
import { CardType } from "../Types/types"
import DefaultLayout from "../Layouts/DefaultLayout";
import AllChips from '../Components/allChips.tsx/allChips';
import UserCards from "../Components/userCards/userCards";
import Loader from "../Components/Loader"

export default function Home() {
    const [cards, setCards] = useState<any>([]);
    const [auxCards, setAuxCards] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { user } = useAuth();

    async function getCards() {
    setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/cards/${user?.id}`);
            const data = await response.json();
            setCards(data.cards); 
            setAuxCards(data.cards);

        } catch (error) {
            console.error('Error getting cards:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCards();
    }, []);

    const handleFilter = (status: string) => {
        setCards(status === "All" ? auxCards : auxCards.filter((card: CardType) => card.status === status));
    };

    return (
        <DefaultLayout>
            <div className="ml-auto mr-auto flex flex-col items-center md:justify-center h-screen gap-4 md:gap-6">
                <h1 className="text-sm sm:text-lg text-gray-700 font-medium mt-6 md:mt-0">Welcome, {user?.name}</h1>
                <AllChips handleFilter={handleFilter} />
                {isLoading ? <Loader /> : <UserCards cards={cards} />}
            </div>
        </DefaultLayout>
    );
}