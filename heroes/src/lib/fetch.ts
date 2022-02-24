import axios from "axios";

export const get = <B>(url: string) => axios.get<B>(url).then((a) => a.data);
