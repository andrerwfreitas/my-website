const CardDescription = ({className, children}) =>
  <>
    <p className={`w-full text-base  ${className}`}>
      {children}
    </p>
  </>
  ;

export default CardDescription;