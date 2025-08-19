import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "02a293de79a94dc088e5b430a0fc27cc",
	},
});
