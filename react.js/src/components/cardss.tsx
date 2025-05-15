type cardsProps = {
    name:string
    className:string
    ispass:string
    description:string
}

const Cardss = (props:cardsProps) => {
    // const{}=props
  return (
    <div className=" border p-[10px] m-auto ">
      {/* <div>
      <h2 className="font-bold text-2xl py-[10px]" > {props.name} </h2>
      <h3 className="font-bold text-xl">{props.className}</h3>
      <p className="font-normal text-[18px] py-[10px]">{props.ispass}</p>
      <p className="font-normal text-[18px]">{props.description}</p>
      </div> */}
      <div>
      <h2 className="font-bold text-2xl py-[10px]" > {props.name} </h2>
      <h3 className="font-bold text-xl">{props.className}</h3>
      <p className="font-normal text-[18px] py-[10px]">{props.ispass}</p>
      <p className="font-normal text-[18px]">{props.description}</p>
      </div>
    </div>
  )
}

export default Cardss
