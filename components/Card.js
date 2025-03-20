import Link from "next/link";

const Card = (props) =>
  <>
      <div className="border-2 w-full flex items-center border-gray-400 rounded-3xl p-4 hover:border-blue-500 hover:shadow-lg transition dark:bg-neutral-800 dark:border-transparent dark:hover:bg-neutral-700">
        {props.children}
        <h1 className="ml-3 text-lg font-medium">{props.title}</h1>
      </div>
  </>
  ;

export default Card;