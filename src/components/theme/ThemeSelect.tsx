import Cassette from './Cassette.tsx'
import Select from '../utility/Select.tsx'
import { Theme, themes } from 'types/theme.ts'

export default function ThemeSelect() {
	const cachedTheme = (localStorage.getItem('theme') as Theme | null) || 'pink-purple'

	document.body.setAttribute('data-theme', cachedTheme)

	return (
		<div class="absolute right-8 top-2 z-20">
			<Select selected={themes.indexOf(cachedTheme)} length={themes.length}>
				{themes.map((theme) => (
					<Cassette theme={theme} />
				))}
			</Select>
		</div>
	)
}
