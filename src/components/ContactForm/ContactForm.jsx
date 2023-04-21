import { Formik, Field } from 'formik';
// import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { ErrorMessage, Form, FormField } from './ContactForm.styled';

// const ContactSchema = Yup.object().shape({
//   name: Yup.string().required('Required field!'),
 
// });

export const ContactForm = ({ onSave }) => {
    return (
      <Formik
        initialValues={{
            contacts: [],
            name: '',
            number: '',
        }}
        onSubmit={(values, actions) => {
          onSave({ ...values, id: nanoid() });
          actions.resetForm();
        }}
       >
        
        <Form>
          <FormField>
            Name
          <Field name="name" />
          Number
          <Field type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required/>
          <ErrorMessage name="name" component="div" />
          </FormField>
          
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  };