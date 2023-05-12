import { useState } from 'react'
import { sendContactForm } from '/lib/api';

const initValues = {
  name:"", 
  subject:"",
  email:"",
  message:""
}

const initState = {values:initValues}

export default function QuotePage() {
 
  const [state, setState] = useState(initState);
   
  const {values} = state;

  const handleChange = ({target}) => 
    setState((prev) => ({
      ...prev, 
      values:{
        ...prev.values,
      
        [target.name]: target.value
      }
  }));

  const onSubmit = async () => {
    try {
      await sendContactForm(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="quote-banner">
        <h1>Request a Quote</h1>
      </div>
      <div id="form-container">
       <form>
        <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={values.name} placeholder="Enter your name" onChange={handleChange} required/>
          </div>
          <div>
          <label htmlFor="subject">Subject:</label>
            <input type="text" id="sub" name="subject" value={values.subject} placeholder="Subject" onChange={handleChange} required/>
          </div>
          <div>
          <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={values.email} placeholder="Email Address" onChange={handleChange} required/>
          </div>
          <div>
          <label htmlFor="message">Details:</label>
            <textarea type="text" id="message" name="message" value={values.message} placeholder="Additional Details" onChange={handleChange} required/>
          </div>
          <div>
            <input type="submit" className="submit" onClick={onSubmit} disabled={!values.name || !values.subject || !values.email || !values.message} />
          </div>
        </fieldset>
      </form>
      </div>
    </>
  )
}