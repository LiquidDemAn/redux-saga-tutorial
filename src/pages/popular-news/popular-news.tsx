import React from 'react';
import { News } from '../../components/news';
import { getPopularNews, getPopularNewsError } from '../../redux/selectors/news';
import { useAppSelector, useAppDispatch } from '../../redux/store/hooks';

export const PopularNews = () => {
    const dispatch = useAppDispatch();
    
	const popularNews = useAppSelector(getPopularNews);
	const popularNewsError = useAppSelector(getPopularNewsError);

	return (
		<div>
			<News news={popularNews} error={popularNewsError} title='Popular News' />
		</div>
	);
};
