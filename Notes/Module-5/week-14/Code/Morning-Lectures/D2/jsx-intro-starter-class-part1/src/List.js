import ListItem from './ListItem';

const List = ({ fruits }) => {
  return (
    <div>
      <h1>List</h1>
      <ol>
        {fruits.map((singleFruit) => {
          return <ListItem key={singleFruit} singleFruit={singleFruit} />;
        })}
      </ol>
    </div>
  );
};

export default List;
