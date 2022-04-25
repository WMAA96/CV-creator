import React, { Component } from "react";

class WorkexpOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { experience, edit } = this.props;

    return (
      <div>
        <ul>
          {experience.map(experience => {
            return (
              <li key={experience.uniqid}>
                <h1>
                  {experience.companyName}{" "}
                  <button id={experience.uniqid} onClick={edit}>
                    Edit!
                  </button>
                </h1>

                {experience.jobTitle}
                {experience.date}
                {experience.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default WorkexpOverview;
