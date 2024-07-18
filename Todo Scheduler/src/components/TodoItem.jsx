import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, handleDeleteButton }) {
  const handleDelete = () => {
    handleDeleteButton(todoName);
  };
  return (
    <div className="container">
      <div className="row rd-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <MdDelete
            type="button"
            className="btn btn-danger rd-button"
            onClick={handleDelete}
          >
            Delete
          </MdDelete>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
