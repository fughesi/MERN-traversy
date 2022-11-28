import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <br />
      <div>{new Date(goal.createdAt).toLocaleDateString("en-US")}</div>
      <h6>{goal.text}</h6>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        {" "}
        ❌{" "}
      </button>
    </div>
  );
}

export default GoalItem;
