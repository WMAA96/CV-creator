import React, { Component } from "react";

class EducationOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { education } = this.props;

    return (
      <div>
        <ul>
          {education.map(education => {
            return (
              <li>
                <h1>{education.schoolName}</h1>
                {education.subject}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default EducationOverview;
