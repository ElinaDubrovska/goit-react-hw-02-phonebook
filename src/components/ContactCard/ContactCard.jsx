import { Component } from 'react';
import { Container, Name } from './ContactCard.styled';
// import { HiTrash} from 'react-icons/hi';
// import PropTypes from 'prop-types';

export class ContactCard extends Component {

  render() {
    // const {  } = this.state;
    const {
      item: { id, name},
      onDelete,
    } = this.props;

    return (
      <Container>
      <Name>{name}</Name>
      <button aria-label="Delete" onClick={() => onDelete(id)}>
             Delete 
            </button>
      </Container>
    );
  }
}
