import React from 'react'

const Form = ({handleChange,handelSubmit,input,editing}) => {
  return (
    <div> <form onSubmit={handelSubmit}>
    <div className="form-group">
        <label htmlFor="exampleInputName">Enter Name</label>
        <input
          type="text"
          name="fname"
          value={input.fname}
          className="form-control"
          id="exampleInputName"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          value={input.email}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPhno">Phno No</label>
        <input
          type="number"
          name="phno"
          value={input.phno}
          className="form-control"
          id="exampleInputPhno"
          placeholder="Number"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputSelect">Select Category</label>
        <select className="form-control" id="exampleInputSelect" name="category" onChange={handleChange} placeholder="Hobby">
          <option value="History">History</option>
          <option value="Sports">Sports</option>
          <option value="Politics">Politics</option>
        </select>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        { editing ? 'Edit' : 'Submit'}
      </button>
    </form><br></br></div>
  )
}

export default Form