import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "84651447322b4f21949f5d11d9660e39",
	},
});
