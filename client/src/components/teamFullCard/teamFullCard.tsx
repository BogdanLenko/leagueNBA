import {FC} from 'react'
import styles from './teamFullCard.module.css'

interface teamInfoProps {
	name: string
	division: string
	foundationYear: number
}

export const TeamFullCard: FC<teamInfoProps> = (props) => {
	const {name, division, foundationYear} = props
	return <>
		<h1 className={styles.color}>{name}</h1>
		<h2 className={styles.color}>{division}</h2>
		<h3 className={styles.color}>{foundationYear}</h3>
	</>
}