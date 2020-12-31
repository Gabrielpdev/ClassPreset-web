import React from 'react';

import { FormOptionsButton } from '../../styles/pages/Login';

interface IOption{
  label: string,
  value: string
}

interface ISwitcher {
  options: IOption[],
  value: string,
  onChange(value: IOption): void,
}

function Switcher({
  options,
  value,
  onChange,
}: ISwitcher) {
  return (
    <>
      {options.map(( option , index ) => (
        <FormOptionsButton
          key={index.toString()}
          type="button"
          isSelected={option.value === value}
          onClick={() => onChange({
            label: option.label,
            value :option.value
          })}
        >
          {option.label}
        </FormOptionsButton>
      ))}
    </>
  );
}

export default React.memo(Switcher);
