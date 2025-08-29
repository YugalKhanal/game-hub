import genres from "@/data/genres";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
	count: number;
}

const useGenres = () => {
	// const { data, error, isLoading } = useData<Genre>("/genres");
	return { data: genres, error: null, isLoading: false };
};

export default useGenres;
