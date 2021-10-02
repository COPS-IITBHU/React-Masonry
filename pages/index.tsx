import type { NextPage } from 'next'
import Masonry from '../masonry/masonry.tsx'

const images = [
	{
		src: 'https://picsum.photos/200/300?image=1050',
		id: 1,
	},
	{
		src: 'https://picsum.photos/400/400?image=1039',
		id: 2,
	},
	{
		src: 'https://picsum.photos/200/200?image=997',
		id: 3,
	},
	{
		src: 'https://picsum.photos/200/300?image=1050',
		id: 4,
	},
	{
		src: 'https://picsum.photos/200/300?image=1050',
		id: 5,
	},
	{
		src: 'https://picsum.photos/200/300?image=1050',
		id: 6,
	},
	{
		src: 'https://picsum.photos/200/300?image=1050',
		id: 7,
	},
]

const breakpoints = [
	{
		width: 350,
		columns: 1,
	},
	{
		width: 1024,
		columns: 2,
	},
	{
		width: 750,
		columns: 2,
	},
	{
		width: 900,
		columns: 3,
	},
	{
		width: 3000,
		columns: 4,
	},
]

const Home: NextPage = () => (
	<div>
		<Masonry breakpoints={breakpoints}>
			{images.map((image, i) => (
				<img
					key={images[i].id}
					src={images[i].src}
					alt=''
					style={{ width: '100%', display: 'block' }}
				/>
			))}
		</Masonry>
	</div>
)

export default Home
