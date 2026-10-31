import { useState } from "react";
import type { SearchProps } from "./types";

const EMPTY_STATE_MESSAGE = 'T½, макс. (нс)';
const BASE = 10n;

export default function Search({
    className,
    maxHalfLifeExponent,
}: SearchProps) {
    const [exponent, setExponent] = useState(maxHalfLifeExponent);
    const hasValue = exponent !== -1;

    return (
        <form method="get" className={`search ${className}`}>
            <div className="search__value-display" data-search-value>
                {hasValue ?  `${BASE ** BigInt(exponent)} нс.` : EMPTY_STATE_MESSAGE}
            </div>
            <button className="search__find" type="submit">Найти</button>

            <div className="search__slider-wrapper slider">
                <h3 className="slider__label slider__label--lower">0 нс.</h3>
                <h3 className="slider__label slider__label--upper">1e27 нс.</h3>
                <input className="slider__input"
                    name="maxHalfLifeExponent"
                    type="range"
                    min="-1"
                    max="27"
                    step="1"
                    value={exponent}
                    onChange={event => setExponent(Number(event.currentTarget.value))}
                    data-search-slider
                />
            </div>
        </form>
    );
}
