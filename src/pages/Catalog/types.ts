import type { IsotopeView } from "@/entities/Isotope/types"

export type CatalogPageProps = {
    isotopes: IsotopeView[];
    maxHalfLifeExponent: number;
}
