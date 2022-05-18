import { State } from "../reducers";

const isFetching = (state: State) => state.doctor.ui.fetching;
const isLogged = (state: State) => !!state.doctor.entities.id;
const getDoctorId = (state: State) => state.doctor.entities.id;

export default {
  isFetching,
  isLogged,
  getDoctorId,
};
