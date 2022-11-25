import axios from "axios";

const GoalsAPI = process.env.REACT_APP_GOALS;

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(GoalsAPI, goalData, config);

  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(GoalsAPI, config);

  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
};

export default goalService;
