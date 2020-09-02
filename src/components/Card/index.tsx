import { CardWrapper } from './styles';
export const Card = ({ id, heading, description }) => {
	return (
		<CardWrapper>
			<div>{id}</div>
			<div>{heading}</div>
			<div>{description}</div>
		</CardWrapper>
	);
};
