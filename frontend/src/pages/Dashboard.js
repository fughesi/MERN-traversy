import { GoalForm } from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading } = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(getGoals());

    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch, user]);

  if (isLoading) {
    return <Spinner />;
  }

  // "proxy": "http://localhost:5150",
  console.log(goals);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className="content">
        {goals.length < 0 ? (
          <div className="goals">
            {goals.map((i) => {
              <GoalItem key={i._id} goal={i} />;
            })}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  );
}

export { Dashboard };
