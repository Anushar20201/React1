import React, { useState } from 'react';


function ContactForm() {
    const { name, email, message } = formState;
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        // setFormState({ ...formState, name: e.target.value }) == this is only for name field; but below is for all fields
        setFormState({...formState, [e.target.name]: e.target.value })

    }
    //In the preceding function, we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.

    // Note that console.log(formState) is located outside the handleChange function declaration—because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync. However, when we place the console.log in the scope of the ContactForm function, we can see that the state is updated properly, as the following image shows:
    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    {/* we can assign the initial state values to the input fields in the DOM, as shown in the following code: */}
                    <input type="email" defaultValue={email} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" />
                </div>
                <button type="submit">Submit</button>

            </form>

        </section>
    )
}

export default ContactForm;