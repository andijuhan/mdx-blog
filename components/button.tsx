interface IButton {
   text: string;
}

const Button = ({ text }: IButton) => {
   return (
      <button className='bg-blue-600 px-4 py-2 rounded-md text-gray-100'>
         {text}
      </button>
   );
};

export default Button;
