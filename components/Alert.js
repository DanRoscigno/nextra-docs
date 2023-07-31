function Alert(props) {
  return (
    <div>
    <div className="alert">
      {props.children}
      <style jsx>{`
        .alert {
          display: inline-block;
          padding: 20px;
          border-radius: 8px;
        }
      `}</style>
      <style jsx>{`
        .alert {
          background: ${props.type == 'warning' ? '#fff3cd' : '#eee'};
        }
      `}</style>
    </div>
      <br />
    </div>
  );
}
 
export default Alert;
