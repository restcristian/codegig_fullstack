import React, {
  FunctionComponent,
  useState,
  SyntheticEvent,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { isEmpty } from "../../helpers";
import { addGig } from "../../store/actions";
import { GigType } from "../../components/GigList/types";
import Form from "../../components/Form";
import Input from "../../components/Input";

interface ErrorType {
  text: string;
}

const AddGig: FunctionComponent = () => {
  const [title, setTitle] = useState<string>("");
  const [technologies, setTechnologies] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<ErrorType[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const currentErrors: ErrorType[] = [];
    if (isEmpty(title)) {
      currentErrors.push({
        text: "please add title",
      });
    }
    if (isEmpty(technologies)) {
      currentErrors.push({
        text: "please add technologies",
      });
    }
    if (isEmpty(budget)) {
      currentErrors.push({
        text: "please add budget",
      });
    }
    if (isEmpty(description)) {
      currentErrors.push({
        text: "please add description",
      });
    }
    if (isEmpty(email)) {
      currentErrors.push({
        text: "please add email",
      });
    }

    if (currentErrors.length > 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }

    setErrors(currentErrors);
  };

  const submitGig = (gig: GigType) => {
    dispatch(addGig(gig));
  };

  useEffect(() => {
    if (isValid) {
      const gig: GigType = {
        title,
        description,
        technologies,
        budget,
        email,
      };
      submitGig(gig);
    }
    // eslint-disable-next-line
  }, [isValid]);

  return (
    <section id="add" className="container" data-testid="sectionAdd">
      <div className="form-wrap">
        <h1>Add a Job</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your job
        </p>
        <Form
          errors={errors}
          onSubmit={onSubmit}
          testId="form"
          isValid={isValid}
        >
          <Input
            id="title"
            maxLength={100}
            onChange={(val) => setTitle(val.currentTarget.value)}
            label="Gig Title"
            placeholder="eg. Small Wordpress website, React developer"
            testId="input-title"
            value={title}
          />
          <Input
            id="technologies"
            maxLength={100}
            onChange={(val) => setTechnologies(val.currentTarget.value)}
            label="Technologies Needed"
            placeholder="eg. javascript, react, PHP"
            testId="input-technologies"
            value={technologies}
          />
          <Input
            id="budget"
            maxLength={100}
            onChange={(val) => setBudget(val.currentTarget.value)}
            label="Budget (Leave blank for unknown)"
            placeholder="eg. 500, 5000, 10000"
            testId="input-budget"
            value={budget}
            type="number"
          />
          <div className="input-group">
            <Input
              id="description"
              label="Gig Description"
              placeholder="Describe the details of the gig"
              onChange={(val) => setDescription(val.currentTarget.value)}
              maxLength={100}
              value={description}
              testId="input-description"
              type="textarea"
            />
          </div>
          <Input
            id="email"
            maxLength={100}
            onChange={(val) => setEmail(val.currentTarget.value)}
            label="Conctact Email"
            placeholder="Enter an email"
            testId="input-email"
            value={email}
          />
        </Form>
      </div>
    </section>
  );
};

export default AddGig;
