import axios from 'axios';

export const getLatestNews = async () => {
	const { data } = await axios(
		'https://hn.algolia.com/api/v1/search?query=react&hitsPerPage=10&page=0'
	);

	return await data;
};
