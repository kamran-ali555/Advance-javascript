import { useState } from "react";

type formData = {
    username:string
    email:string
    password:string
    change_password:string
}
type formData2 = {
    username:string
    email:string
    password:string
    change_password:string
}

const Contact = () => {
  const [formData, setFormData ] = useState<formData>({
    username: "",
    email: "",
    password: "",
    change_password: ""
  })
  const newFormData = (even) =>{
    const name = event.target.name;
    // console.log(name);
    const value = event.target.value;
    // console.log(value);

    setFormData((prev)=>{
      return {...prev, [name] :value};
    })
    
  }
  return (
    <div>
      <h1 className="text-4xl font-extrabold mt-[30px]">contact section</h1>

      <div className="w-[400px] border rounded m-auto p-[20px] mt-[50px]  ">
        <form action="/">
          <h1 className="text-2xl font-bold">Register</h1>
          <input
            className="w-full py-[8px] px-[5px] text-black outline rounded mt-[15px]"
            placeholder=" username"
            type="text"
            id="name"
            name="name"
            value={formData.username}
            onChange={newFormData}
          />
          
          <input
            className="w-full py-[8px] px-[5px] outline rounded mt-[15px]"
            placeholder=" Enter Your Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={newFormData}
          />
          <input
            className="w-full py-[8px] px-[5px] outline rounded mt-[15px]"
            placeholder=" Password"
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={newFormData}

          />
          <input
            className="w-full py-[8px] px-[5px] outline rounded mt-[15px]"
            placeholder=" Comfirm Password"
            type="password"
            name="comfirm-password"
            id="comfirm_password"
            value={formData.change_password}
            onChange={newFormData}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
