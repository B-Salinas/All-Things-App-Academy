const Composition = (props) => {
  return (
    <div
      style={{
        border: '5px solid #FF5733',
        background: 'white',
        padding: '10px',
        margin: '10px',
        color: 'black'
      }}
    >
      <h1>Composition</h1>
      {props.children}
    </div>
  );
};

export default Composition;
