import "./button.css";

const Button = ({text}) => {
  return (
        <button className="btn-12 w-11/12 ">
            <span className="text-xl">{`Checkout: $${text}`}</span>
        </button>
    
  );
};

export default Button;
