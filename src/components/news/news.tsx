import { NewsType } from '../../redux/actions/typedef';
import './news.css';

type Props = {
	news: NewsType[];
	title: string;
	error?: string;
};

export const News = ({ news, title, error }: Props) => {
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<div>
			<h2>{`${title}:`}</h2>
			<ul className='news-list'>
				{news.map(
					({
						objectID,
						url,
						title,
						points,
						num_comments,
						created_at,
						author,
					}) => (
						<li key={objectID} className='news'>
							<div className='description'>
								<a href={url} className='news-title'>
									{title || 'No title'}
								</a>
								<span className='text'>{`${points || 0} points`}</span>
								<span className='comments'>{`${
									num_comments || 0
								} comments`}</span>
								<span className='date'>
									{new Date(created_at).toLocaleDateString()}
								</span>
								<span className='author'>{author || 'no author'}</span>
							</div>
						</li>
					)
				)}
			</ul>
		</div>
	);
};
