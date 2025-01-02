export const Input = ({ type, placeholder, onClick }) => {
  return (
    <span
      onClick={onClick}
      className={`rounded-2xl m-4   p-4 py-8 text-white cursor-pointer bg-blue-500`}
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-blue-500 outline-none p-4"
      ></input>
    </span>
  );
};
