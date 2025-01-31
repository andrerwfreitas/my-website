const Card = ({className, children}) =>
  <>
    <div className={`w-full p-4 rounded-3xl bg-slate-800 flex flex-col shadow-sm border border-transparent hover:border-slate-700 transition cursor-pointer text-white ${className}`}>{children}</div>
  </>
  ;

export default Card;