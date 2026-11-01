import './style.scss';

import IsotopeCard from '@/entities/Isotope/ui/IsotopeCard/IsotopeCard';
import Search from '@/features/Search/Search';

import type { CatalogPageProps } from "./types";

export default function CatalogPage({
    isotopes,
    maxHalfLifeExponent
}: CatalogPageProps) {
    return (<>
        <section className="catalog">
            <Search
                className="catalog__search"
                maxHalfLifeExponent={maxHalfLifeExponent}
            />
            <ul className="catalog__list">
                {isotopes.map(isotope => (
                    <li className="catalog__item" key={isotope.id}>
                        <IsotopeCard {...isotope} />
                    </li>
                ))}
            </ul>
        </section>
    </>)
}
