export default function Todo(props) {
  return (
    <div>
      <input type="text" value={props.content} disabled></input>
      <button
        style={{ background: "red", borderRadius: "100%", border: "none" }}
        onClick={props.remove}
      >
        -
      </button>
    </div>
  );
}
