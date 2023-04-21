import { Component } from 'react';
import { Container, Name, Number } from './ContactCard.styled';
// import { HiTrash} from 'react-icons/hi';
// import PropTypes from 'prop-types';

export class ContactCard extends Component {

  render() {
 
    const {
      item: { id, name, number},
      onDelete,
    } = this.props;

    return (
      <Container>
      <Name>
        {name}</Name> : <Number>{number}</Number>
      <button aria-label="Delete" onClick={() => onDelete(id)}>
             Delete 
            </button>
      </Container>
    );
  }
}
