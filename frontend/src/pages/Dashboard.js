import { GoalForm } from "../components/GoalForm";
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

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
        {JSON.stringify(goals)}
      </section>

      <GoalForm />
    </>
  );
}

export { Dashboard };
