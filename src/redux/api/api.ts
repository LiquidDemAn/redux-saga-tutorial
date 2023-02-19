import axios from 'axios';

export const getLatestNews = async (searchQuery: string) => {
	const { data } = await axios(
		`https://hn.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`
	);

	return await data;
};

export const getPopularNews = async () => {
	const { data } = await axios(
		`https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`
	);

	return await data;
};
