import { data } from './data';
import { Card } from '@components/Card';
import { CardsContainer } from './styles';

export const Home = () => {
	console.log(data);
	return (
		<div>
			<CardsContainer>
				{data.map((cd) => (
					<Card {...cd} />
				))}
			</CardsContainer>
		</div>
	);
};
