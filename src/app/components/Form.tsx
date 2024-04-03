const Form = (props: { children: React.ReactNode; className?: string }) => {
  return <form className={props.className}>{props.children}</form>;
};

export default Form;
