interface IButton {
  text: string;
  type?: 'submit' | 'button';
  className?: string;
}

const Button = ({ text, type, className }: IButton) => {
  return (
    <button type={type} className={`px-[34px] py-[12px] rounded-lg ${className}`}>
      {text}
    </button>
  );
};

export default Button;
