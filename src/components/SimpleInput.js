import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(true);
  const nameRef = useRef();
  const handleOnChangeName = event => {
    setName(event.target.value);
  }
  const handleOnSubmit = event => {
    event.preventDefault();
    if(name.trim() === ''){
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
    console.log('STATE ',name);
    console.log('REF ',nameRef.current.value);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameRef} onChange={handleOnChangeName}/>
      </div>
      { !nameIsValid && <p>Entered name is invalid!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
