import './style.scss';

import { makeClassString } from '@/shared/utils/makeClassString';

import type { TextareaProps } from "./types";

export default function Textarea({
    label,
    className,
    id,
    ...inputProps
}: TextareaProps) {
    return (<>
        <div
            className={makeClassString(
                'textarea',
                className,
            )}
        >
            {label && (
                <label
                    htmlFor={id}
                    className="textarea__label"
                >
                    {label}
                </label>
            )}

            <textarea
            className="textarea__input"
                id={id}
                {...inputProps}
            />
        </div>
    </>)
}
