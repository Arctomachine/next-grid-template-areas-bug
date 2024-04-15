/** Add your relevant code here for the issue to reproduce */
import gridStyles from './Grid.module.scss'
import cardStyles from './Card.module.scss'

export default function Home () {
	return (
		<>
			<div>
				Mismatch in grid-area names between 2 modules. <br/>
				Check browser devtools for styles of grid and cards. <br/>
				Grid will append its module name to grid-template-area, but card will
				append its module name to grid-area. Since they are different names,
				browser will not put cards into grid correctly. <br/>
				Remove --turbo flag, restart server and refresh page to see correct
				result (3 equal squares fill entire width, area names are as defined in
				code).
			</div>
			<div className={gridStyles.grid}>
				<div className={cardStyles.card}>1</div>
				<div className={cardStyles.card}>2</div>
				<div className={cardStyles.card}>3</div>
			</div>
		</>
	)
}
