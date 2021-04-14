import Thread from './Thread';

const Div = (props) => {
  return (
    <div
      style={{
        color: props.color,
        background: '#C70039',
        padding: '10px',
        margin: '10px',
        border: '5px solid #FF5733'
      }}
    >
      <h1>Div Component</h1>
      <Thread tName={props.name} />
      <Thread />
    </div>
  );
};

export default Div;
