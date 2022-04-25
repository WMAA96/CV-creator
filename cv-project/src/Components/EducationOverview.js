import React, { Component } from "react";

class EducationOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education, edit } = this.props;

    return (
      <div>
        <ul>
          {education.map(education => {
            return (
              <li key={education.uniqid}>
                <h1>
                  {education.schoolName}{" "}
                  <button id={education.uniqid} onClick={edit}>
                    Edit!
                  </button>
                </h1>

                {education.subject}
                {education.dateOfStudy}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationOverview;
