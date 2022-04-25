import React, { Component } from "react";
import uniqid from "uniqid";
import WorkexpOverview from "./WorkexpOverview";

class Workexp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experience: {
        companyName: "Google",
        jobTitle: "Software Engineer",
        description: "Web developer at Google",
        date: "1/1/21 -> 2/2/22",
        uniqid: uniqid(),
      },
      experiences: [],
    };
    this.edit = this.edit.bind(this);
  }
  edit(e) {
    const editing = this.state.experiences.filter(
      experience => experience.uniqid === e.target.id
    );

    this.setState({
      experience: editing[0],
    });
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState(prevState => {
      prevState.experience[id] = value;

      return {
        experience: prevState.experience,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    for (let i = 0; i < this.state.experiences.length; i++) {
      if (this.state.experience.uniqid === this.state.experiences[i].uniqid) {
        const newexperiences = this.state.experiences.slice();
        newexperiences[i] = {
          companyName: this.state.experience.companyName,
          jobTitle: this.state.experience.jobTitle,
          description: this.state.experience.description,
          date: this.state.experience.date,
          uniqid: this.state.experience.uniqid,
        };
        this.setState({
          experiences: newexperiences,
          experience: {
            companyName: "",
            jobTitle: "",
            description: "",
            date: "",
            uniqid: uniqid(),
          },
        });
        return;
      }
    }

    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        companyName: "",
        jobTitle: "",
        date: "",
        description: "",
        uniqid: uniqid(),
      },
    });
    console.log(this.state.experiences);
  };

  render() {
    const { experience, experiences } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="companyName"> Enter company name </label>
          <input
            value={experience.companyName}
            onChange={this.handleChange}
            type="text"
            id="companyName"
          />
          <label htmlFor="jobTitle"> Enter job title </label>
          <input
            value={experience.jobTitle}
            onChange={this.handleChange}
            type="text"
            id="jobTitle"
          />
          <label htmlFor="description"> Enter description of role </label>
          <input
            value={experience.description}
            onChange={this.handleChange}
            type="text"
            id="description"
          />
          <label htmlFor="date"> Enter date of work </label>
          <input
            value={experience.date}
            onChange={this.handleChange}
            type="text"
            id="date"
          />
          <input type="submit" value="Submit" />
        </form>
        <WorkexpOverview experience={experiences} edit={this.edit} />
      </div>
    );
  }
}

export default Workexp;
