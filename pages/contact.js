import styles from '@/styles/Contact.module.css';
import { useState } from 'react';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    await fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        alert("Thanks for contacting us!")
        setName('')
        setEmail('')
        setPhone('')
        setDesc('')
      })

  }

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.label}>Enter your name</label>
          <input type="text" name='name' className="form-control" id="name" aria-describedby="name" onChange={handleChange} value={name} required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.label}>Enter your email</label>
          <input type="email" name='email' className="form-control" id="email" aria-describedby="email" onChange={handleChange} value={email} required />
          <div className={styles.formText}>We'll never share your email with anyone else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.label}>Enter your phone</label>
          <input type="number" name='phone' className="form-control" onChange={handleChange} id="phone"  value={phone} required />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc" className={styles.label}>Elaborate your concern</label>
          <textarea className="form-control" onChange={handleChange} id="desc" name='desc' value={desc} required ></textarea>
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;