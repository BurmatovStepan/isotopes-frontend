import type { InputHTMLAttributes } from "react";

export type FieldProps = {
    label?: string;
    className?: string;
    id?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'>;
