import React, { Component } from "react";

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        pname: "",
        email: "rr@gmail.com ",
        phone: "0800 00 1066",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;

    this.setState(prevState => {
      prevState.general[id] = value;
      return {
        general: prevState.general,
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { general } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pname"> Enter name </label>
          <input
            value={general.pname}
            onChange={this.handleChange}
            type="text"
            id="pname"
          />
          <label htmlFor="email"> Enter email </label>
          <input
            value={general.email}
            onChange={this.handleChange}
            type="text"
            id="email"
          />
          <label htmlFor="phone"> Enter phone number </label>
          <input
            value={general.phone}
            onChange={this.handleChange}
            type="text"
            id="phone"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default General;
