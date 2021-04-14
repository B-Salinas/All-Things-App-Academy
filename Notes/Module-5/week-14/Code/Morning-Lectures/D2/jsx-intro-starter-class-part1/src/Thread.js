const Thread = (props) => {
  return (
    <div
      style={{
        background: '#FF5733',
        color: 'white',
        border: '5px solid #FFC300',
        padding: '5px',
        margin: '5px'
      }}
    >
      <h1>Thread Component</h1>
      {props.tName && <h2>Hi {props.tName.fName}</h2>}
      {/* {props.tName ? <h2>Hi {props.tName.fName}</h2> : null} */}
    </div>
  );
};

export default Thread;
