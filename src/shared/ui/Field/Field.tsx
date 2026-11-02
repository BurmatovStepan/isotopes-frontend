import './style.scss';

import { makeClassString } from '@/shared/utils/makeClassString';

import type { FieldProps } from "./types";

export default function Field({
    label,
    className,
    id,
    ...inputProps
}: FieldProps) {
    return (<>
        <div
            className={makeClassString(
                'field',
                className,
            )}
        >
            {label && (
                <label
                    htmlFor={id}
                    className="field__label"
                >
                    {label}
                </label>
            )}

            <input
                className="field__input"
                id={id}
                {...inputProps}
            />
        </div>
    </>)
}
