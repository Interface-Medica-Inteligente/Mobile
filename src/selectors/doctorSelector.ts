import { State } from "../reducers";

const isLogged = (state: State) => !!state.doctor.entities.id;
const getDoctorId = (state: State) => state.doctor.entities.id;

export default {
  isLogged,
  getDoctorId,
};
