import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';
import './IssueForm.css';

const IssueForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [issue, setIssue] = useState('');
  const [issuesArray, setIssuesArray] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  console.log(validationErrors);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newIssue = {
      id: nanoid(),
      date: format(new Date(), 'MM/dd/yyyy'),
      name,
      email,
      level: level || 'not urgent',
      issue
    };

    setIssuesArray((prevIssues) => [...prevIssues, newIssue]);
    resetValue();
  };

  const resetValue = () => {
    setName('');
    setEmail('');
    setLevel('');
    setIssue('');
  };

  useEffect(() => {
    const errors = [];

    if (name.length < 2) errors.push('Name must be 2 or more characters');
    if (!email.includes('@') || !email.includes(''))
      errors.push('Enter valid Email');
    if (!issue.length) errors.push('Please Tell Us Your Issue');

    setValidationErrors(errors);
  }, [name, email, issue]);

  return (
    <div className='form'>
      <div style={{ position: 'absolute', top: '10px', left: 100 }}>
        <div>
          {validationErrors &&
            validationErrors.map((error) => (
              <p
                key={error}
                style={{
                  color: 'red',
                  fontStyle: 'italic',
                  lineHeight: 0,
                  margin: 20
                }}
              >
                *** {error}
              </p>
            ))}
        </div>
      </div>
      <h2>Make A Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            onChange={(event) => setName(event.target.value)}
            value={name}
            type='text'
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor='level'>Urgency Level:</label>
          <select
            onChange={(e) => setLevel(e.target.value)}
            value={level}
            name='level'
          >
            <option value='' disabled>
              Select
            </option>
            <option value='urgent'>Urgent</option>
            <option value='not urgent'>Not Urgent</option>
          </select>
        </div>
        <div>
          <label htmlFor='issue'>Issue:</label>
          <br />
          <textarea
            onChange={(e) => setIssue(e.target.value)}
            value={issue}
            rows='10'
            cols='50'
          ></textarea>
        </div>

        <button
          disabled={validationErrors.length > 0 ? true : false}
          type='submit'
        >
          Submit
        </button>
      </form>

      <hr />
      <h2>List of Issues:</h2>
    </div>
  );
};

export default IssueForm;
