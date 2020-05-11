import React, { FunctionComponent, FormEvent } from "react";

interface ErrorType {
  text: string;
}

interface Props {
  errors: ErrorType[];
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  testId: string;
  isValid: boolean;
}

const Form: FunctionComponent<Props> = ({
  errors,
  onSubmit,
  children,
  testId,
  isValid,
}) => {
  return (
    <div>
      {errors.length > 0 && (
        <div className="errors" data-testid="errors">
          {errors.map((error: ErrorType, idx: number) => (
            <div key={idx} className="error">
              <p>{error.text}</p>
            </div>
          ))}
        </div>
      )}
      {isValid && (
        <span
          className="form-status"
          style={{ display: "none" }}
          data-testid="form-status"
        >
          submitted
        </span>
      )}
      <form
        action="POST"
        method="POST"
        onSubmit={onSubmit}
        data-testid={testId}
      >
        {children}
        <input
          type="submit"
          value="Add Gig"
          className="btn btn-reverse"
          data-testid="btn-submit"
        ></input>
      </form>
    </div>
  );
};

export default Form;
