import "./button.css";

const Button = ({total}) => {
  return (
        <button className="btn-12 w-11/12 ">
            <span className="text=xl">{`Checkout: #${total}`}</span>
        </button>
    
  );
};

export default Button;
