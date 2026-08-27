import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);

  // Standard email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Don't show error if input is completely empty
    if (value === '') {
      setIsValid(null);
      return;
    }

    // Test email validity
    setIsValid(emailRegex.test(value));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Email Validator</h2>
      
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmailChange}
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '2px solid',
          borderColor: isValid === null ? '#ccc' : isValid ? 'green' : 'red',
          borderRadius: '4px',
          outline: 'none'
        }}
      />

      {/* Conditional feedback text */}
      {isValid === true && <p style={{ color: 'green' }}>✓ Valid email address</p>}
      {isValid === false && <p style={{ color: 'red' }}>✗ Invalid email address</p>}
    </div>
  );
}

export default App;
