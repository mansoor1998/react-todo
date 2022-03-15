import MaterialCheckbox from '@material-ui/core/Checkbox';
import React, { forwardRef, Ref, useEffect, useState } from 'react';

const AppCheckbox = ({ name, checked, onFocus = undefined, onChange = undefined, onBlur = undefined }, ref) => {
    const [localChecked, setLocalChecked] = useState(checked ?? null);
    useEffect(() => setLocalChecked(checked ?? null), [checked]);
    const handleChange = () => {
        switch (localChecked) {
            case true:
                setLocalChecked(false);
                break;
            case false:
                setLocalChecked(null);
                break;
            default:
                setLocalChecked(true);
                break;
        }
        if (onChange) {
            onChange(localChecked);
        }
    };
    const handleBlur = () => {
        if (onBlur) {
            onBlur(localChecked);
        }
    };
    return (
        <MaterialCheckbox
            inputRef={ref}
            name={name}
            checked={!!localChecked}
            indeterminate={localChecked === null}
            onFocus={onFocus}
            onChange={handleChange}
            onBlur={handleBlur}
        />
    );
};

export default forwardRef(AppCheckbox);