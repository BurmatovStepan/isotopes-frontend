import Search from "@/features/Search/Search";
import IsotopeCard from "@/entities/Isotope/ui/IsotopeCard/IsotopeCard";
import NavBar from "@/features/NavBar/NavBar";
import type { FeedPageProps } from "./types";

export default function FeedPage({
    isotopes,
    maxHalfLifeExponent
}: FeedPageProps) {
    return (
        <div className="page feed-page">
            <section className="feed">
                <Search
                    className="feed__search"
                    maxHalfLifeExponent={maxHalfLifeExponent}
                />
                <ul className="feed__list">
                    {isotopes.map(isotope => (
                        <li className="feed__item" key={isotope.id}>
                            <IsotopeCard {...isotope} />
                        </li>
                    ))}
                </ul>
            </section>
            <NavBar></NavBar>
        </div>
    )
}
