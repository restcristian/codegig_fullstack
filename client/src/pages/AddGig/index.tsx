import React, { FunctionComponent, useState } from "react";

const AddGig: FunctionComponent = () => {
  const [title, setTitle] = useState<string>("tui");
  const [technlogies, setTechnologies] = useState<string>("css");

  return (
    <section id="add" className="container">
      <div className="form-wrap">
        <h1>Add a Job</h1>
        <p>
          Your contact email will be shared with registered users to apply to
          your job
        </p>
        <form action="POST">
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
                value={technlogies}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddGig;
