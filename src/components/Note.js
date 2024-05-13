
const Note = ({ note }) => {
  return (
    <div>
      <p>{note.content}</p>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default Note;