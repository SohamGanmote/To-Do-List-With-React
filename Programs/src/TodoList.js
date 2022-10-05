import "./App.css";
function TodoList(props) {
  function completed(e) {
    e.target.parentElement.parentElement.classList.toggle("display");
  }
  return (
    <div>
      {props.data.map(function newArray(element) {
        return (
          <p
            key={element.id}
            id={element.id}
            deleated={element.isDeleated.toString()}
          >
            {element.value}
            <div>
              <button className="complet" onClick={completed}>
                Complete
              </button>
              <button onClick={props.delFun}>Delete</button>
            </div>
          </p>
        );
      })}
    </div>
  );
}
export default TodoList;
