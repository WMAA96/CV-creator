import React, { Component } from "react";
import EducationOverview from "./EducationOverview";
import uniqid from "uniqid";
class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      education: {
        schoolName: "Erith",
        subject: "English ",
        dateOfStudy: "1996-2001",
        uniqid: uniqid(),
      },
      educations: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
  }

  edit(e) {
    this.setState({
      education: {
        schoolName: "Erith",
        subject: "English ",
        dateOfStudy: "1996-2001",
        uniqid: e.target.id,
      },
    });
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
    for (let i = 0; i < this.state.educations.length; i++) {
      if (this.state.education.uniqid === this.state.educations[i].uniqid) {
        const newEducations = this.state.educations.slice();
        newEducations[i] = {
          schoolName: this.state.education.schoolName,
          subject: this.state.education.subject,
          dateOfStudy: this.state.education.dateOfStudy,
          uniqid: this.state.education.uniqid,
        };
        this.setState({
          educations: newEducations,
          education: {
            schoolName: "",
            subject: "",
            dateOfStudy: "",
            uniqid: uniqid(),
          },
        });
        return;
      }
    }
    //console.log(this.state.education.uniqid);
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        schoolName: "",
        subject: "",
        dateOfStudy: "",
        uniqid: uniqid(),
      },
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
        <EducationOverview education={educations} edit={this.edit} />
      </div>
    );
  }
}

export default Education;
