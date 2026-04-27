function Button ({text,variant}){
    const primaryBtn =
  "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition";

const secondaryBtn =
  "border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition";
  const tertiaryBtn ="text-blue-600 hover:underline";
  let buttonStyle;
  if(variant=== "primary"){
    buttonStyle = primaryBtn;

  }
  else if(variant==="secondary"){
    buttonStyle = secondaryBtn;
  }
  else{
    buttonStyle=tertiaryBtn;
  }

    return (
       <button className={buttonStyle}>{text}</button>
    )
}

export default Button;