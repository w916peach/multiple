import moment from "moment";
export const formatDate = (datetime) =>
  moment(Number(datetime)).format("YYYY-MM-DD HH:mm:ss");
