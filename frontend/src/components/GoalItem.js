import React from "react";

function GoalItem({ goal }) {
  return (
    <div className="goal">
      <div>{new Date(goal.createAt).toLocaleDateString("en-US")}</div>
      <h2>{goal.text}</h2>
    </div>
  );
}

export default GoalItem;
