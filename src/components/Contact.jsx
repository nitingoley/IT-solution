import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contacts'>
      <main id='contacts'>
        <h1>Contact Us</h1>
        <form action="">
           <div>
             <label htmlFor="name">Name</label>
             <input type="text" required placeholder='Enter your name' name="name" id="name" />
           </div>

           <div>
             <label htmlFor="email">Email</label>
             <input type="email" required placeholder='Enter your email' name="email" id="email" />
           </div>

           <div>
             <label htmlFor="message">Message</label>
             <input required placeholder='Enter your message' name="message" id="message" />
           </div>

           <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
