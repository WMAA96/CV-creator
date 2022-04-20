import React, { Component } from "react";
import EducationOverview from "./EducationOverview";
class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        schoolName: "Erith",
        subject: "English ",
        dateOfStudy: "1996-2001",
      },
      educations: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState(prevState => {
      prevState.education[id] = value;
      return {
        education: prevState.education,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      educations: this.state.educations.concat(this.state.education),
    });
    console.log(this.state.educations);
  };

  render() {
    const { education, educations } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="schoolName"> Enter school name </label>
          <input
            value={education.schoolName}
            onChange={this.handleChange}
            type="text"
            id="schoolName"
          />
          <label htmlFor="subject"> Enter subject/course name </label>
          <input
            value={education.subject}
            onChange={this.handleChange}
            type="text"
            id="subject"
          />
          <label htmlFor="dateOfStudy"> Enter date of study </label>
          <input
            value={education.dateOfStudy}
            onChange={this.handleChange}
            type="text"
            id="dateOfStudy"
          />
          <input type="submit" value="Submit" />
        </form>
        <EducationOverview education={educations} />
      </div>
    );
  }
}

export default Education;
