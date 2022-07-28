import "./Alert.css";

const Alert = (props) => {
  const { title, children, isActive = true, click } = props;

  return (
    isActive && (
      <div className="modal">
        <div className="modal__btn-close" onClick={click}>
          x
        </div>
        <div className="modal__dialog">
          {title ? <div className="modal__header">{title}</div> : ""}
          {children ? <div className="modal__body">{children}</div> : ""}
        </div>
      </div>
    )
  );
};
    
export default Alert;
