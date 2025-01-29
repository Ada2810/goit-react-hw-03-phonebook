import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
        </label>
        <label>
          Number:
          <input type="tel" name="number" value={this.state.number} onChange={this.handleChange} required />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
