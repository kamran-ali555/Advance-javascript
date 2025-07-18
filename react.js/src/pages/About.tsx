import { useState } from "react";

const About = () => {
  const [count, setCount] = useState(0);

  // count [userValue, setUserValue] = useState();

  // function setUserInpur( vlu: React.ChangeEvent<HTMLTextAreaElement>){
  //   setUserValue(e.terget.value)
  // }

  return (
    <div className="mt-[30px]">
      <h1 className="text-4xl font-extrabold">about section</h1>
      <div className="mt-[50px] w-[400px] h-[400px] border flex justify-center items-center gap-[50px] m-auto">
        <h3
          className="flex justify-center items-center pb-0.5 cursor-pointer text-2xl font-bold text-red-600  hover:bg-amber-600 w-[30px] h-[30px] hover:text-white text-center border border-black rounded-full "
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
          // onClick={() => {
          //   if (count === 0) {
          //     setCount(0)
          //   }else{
          //   setCount(count - 1);
          //   }
          // }}
        >
          -
        </h3>
        <h1 className="text-2xl font-bold text-red-600">{count}</h1>
        <h3
          className=" flex justify-center items-center pb-0.5 cursor-pointer  text-2xl font-bold text-red-600   text-center border border-black rounded-full hover:text-white hover:bg-amber-600 w-[30px] h-[30px] "
          onClick={() => (count === 10 ? setCount(10) : setCount(count + 1))}
          // onClick={() => {
          //   if (count === 10) {
          //     setCount(10)
          //   }else{
          //   setCount(count + 1);
          //   }
          // }}
        >
          +
        </h3>
      </div>

      {/* <div className="w-[400px] h-[200px] rounded m-auto mt-[50px]">
        <textarea
          name="textarea"
          id="textarea"
          placeholder=" Enter Your Feedback"
          className="py-[8px] outline w-full h-full rounded"
          // value={}
          onChange={(vlu)=> setUserInpur(vlu)}
        ></textarea>
        <p></p>
      </div> */}
    </div>
  );
};

export default About;
