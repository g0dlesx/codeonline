import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  link?: string;
  onClickFunc?: any;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  link,
  onClickFunc,
}) => {
  return (
    <div className=" flex justify-center items">
      {link ? (
        <Link href={link!}>
          <button
            className="h-10 px-6 font-semibold rounded-md bg-primary text-black hover:bg-gradient-to-r from-red-400 to-orange-800"
            type="submit"
          >
            {text}
          </button>
        </Link>
      ) : (
        <button
        onClick={onClickFunc}
          className="h-10 px-6 font-semibold rounded-md bg-primary text-black hover:bg-gradient-to-r from-red-400 to-orange-800"
          type="submit"
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default PrimaryButton;
