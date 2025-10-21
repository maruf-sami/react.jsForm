import React,{useState} from 'react'

function SignupForms(){

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    console.log(formData);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("FORM DATA PRINTED", formData);

  }
  return (

    <form onSubmit={handleSubmit} className="space-y-4">

      <input type="text"name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input type="email"name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
          type="submit"
          className="w-full bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Signup
      </button>

    </form>
  )
}

export default SignupForms;