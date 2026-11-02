import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
    label?: string;
    className?: string;
    id?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'id'>;
