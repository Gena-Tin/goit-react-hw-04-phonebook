import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export function ContactForm({ onSubmit }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const setKey = e => {
    // const addId = nanoid();
    setId(nanoid()); //add unic ID
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ id, name, number });
    resetForm();
  };

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.currentTarget;
    setNumber(value);
  };

  const resetForm = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <br />
        <input
          className={css.nameInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          onBlur={setKey}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <label>
        Number <br />
        <input
          className={css.numberInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.btnAddContact} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;

// import React, { Component } from 'react';
// import css from './ContactForm.module.css';
// import { nanoid } from 'nanoid';

// class ContactForm extends Component {
//   state = {
//     id: '',
//     name: '',
//     number: '',
//   };

//   setId = () => {
//     const addId = nanoid();//add unic ID
//     this.setState({ id: addId });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.resetForm();
//   };

//   handleCange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '', id: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name
//           <br />
//           <input
//             id={this.addId}
//             className={css.nameInput}

//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleCange}
//             onBlur={this.setId}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Number <br />
//           <input
//           className={css.numberInput}
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleCange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <br />
//         <button className={css.btnAddContact} type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
