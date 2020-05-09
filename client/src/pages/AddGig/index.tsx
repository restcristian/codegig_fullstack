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
    if (errors.length > 0) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    setErrors(currentErrors);
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
      dispatch(addGig(gig));
    }
  }, [isValid]);

  return (
    <section id="add" className="container">
      <div className="form-wrap">
        <h1>Add a Job</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your job
        </p>
        {errors.map((error: ErrorType, idx: number) => (
          <div key={idx} className="error">
            <p>{error.text}</p>
          </div>
        ))}
        <form action="POST" onSubmit={onSubmit}>
          <div className="input-group">
            <label htmlFor="title">Gig Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="input-box"
              placeholder="eg. Small Wordpress website, React developer"
              maxLength={100}
              onChange={(val) => setTitle(val.currentTarget.value)}
              value={title}
            />
            <div className="input-group">
              <label htmlFor="technologies">Technologies Needed</label>
              <input
                type="text"
                name="technologies"
                id="technologies"
                className="input-box"
                placeholder="eg. javascript, react, PHP"
                maxLength={100}
                onChange={(val) => setTechnologies(val.currentTarget.value)}
                value={technologies}
              />
            </div>
            <div className="input-group">
              <label htmlFor="budget">Budget (Leave blank for unknown)</label>
              <input
                type="number"
                name="budget"
                id="budget"
                className="input-box"
                placeholder="eg. 500, 5000, 10000"
                onChange={(val) => setBudget(val.currentTarget.value)}
                value={budget}
              />
            </div>
            <div className="input-group">
              <label htmlFor="description">Gig Description</label>
              <textarea
                name="description"
                id="description"
                className="input-box"
                placeholder="Describe the details of the gig"
                onChange={(val) => setDescription(val.currentTarget.value)}
                rows={10}
                value={description}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                id="contactemail"
                className="input-box"
                placeholder="Enter an email"
                onChange={(val) => setEmail(val.currentTarget.value)}
                value={email}
              />
            </div>
            <input
              type="submit"
              value="Add Gig"
              className="btn btn-reverse"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddGig;
