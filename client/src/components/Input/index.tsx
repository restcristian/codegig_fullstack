import React, { FunctionComponent, ChangeEvent } from "react";

interface Props {
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  id: string;
  testId: string;
  maxLength: number;
  label: string;
  type?: string;
  rows?: number;
}

const Input: FunctionComponent<Props> = ({
  value,
  onChange,
  placeholder,
  id,
  testId,
  maxLength,
  label,
  type = "text",
  rows = 10,
}) => {
  return (
    <div className="input-group">
      <label htmlFor="title">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={id}
          id={id}
          className="input-box"
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          rows={rows}
          data-testid={testId}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="input-box"
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          value={value}
          data-testid={testId}
        />
      )}
    </div>
  );
};

export default Input;
