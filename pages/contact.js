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
          <label htmlFor="exampleInputEmail1" className={styles.label}>Enter your name</label>
          <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} value={name} />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.label}>Enter your email</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={handleChange} value={email} />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputPassword1" className={styles.label}>Enter your phone</label>
          <input type="number" name='phone' className="form-control" onChange={handleChange} id="exampleInputPassword1" placeholder="Phone No." value={phone} />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className={styles.label}>Elaborate your concern</label>
          <textarea className="form-control" placeholder="Write your concern here" onChange={handleChange} id="desc" name='desc' value={desc}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;