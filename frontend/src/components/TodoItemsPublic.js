import { useNavigate } from "react-router-dom";

const TodoItemsPublic = ({ item }) => {
  const navigate = useNavigate()

  return (
    <tr>
      <td className="border px-4 py-2">{item.title}</td>
      <td className="border px-4 py-2">{item.description}</td>
      <td className="border px-4 py-2">
        {item.completed ? "Completed" : "Not Completed"}
      </td>

      <td className="border px-4 py-2">
        <button 
        className="bg-blue-600 text-white px-2 rounded"
        onClick={() => navigate(`/todo/view/${item._id}`)}
        >
        View</button>
      </td>
    </tr>
  );
};

export default TodoItemsPublic
