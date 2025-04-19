const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const REM_TO_FAV = "REM_TO_FAV";
export const GET_JOBS = "GET_JOBS";

export const AddToFavAction = (company) => {
  return {
    type: ADD_TO_FAV,
    payload: company,
  };
};
export const RemoveToFavAction = (company) => {
  return {
    type: REM_TO_FAV,
    payload: company,
  };
};

export const getJobs = (company) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + company + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log("Errore nella fetch dei lavori:", error);
    }
  };
};
