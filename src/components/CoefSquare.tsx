interface Props {
	value: number
}

export default function CoefSquare({ value }: Props) {
	const h1 = 0
	const s1 = 0
	const l1 = 0

	const h2 = 0
	const s2 = 0
	const l2 = 100

	const progress = (value + 1) / 2

	const h = h1 + (h2 - h1) * progress
	const s = s1 + (s2 - s1) * progress
	const l = l1 + (l2 - l1) * progress

	return (
		<div
			class={`flex aspect-square w-full rounded-xl items-center justify-center border-4 border-secondary text-[clamp(0.5rem,1.5vw,1rem)] ${value > 0 ? 'text-primary' : 'text-secondary'
				}`}
			style={{
				'background-color': `hsl(${h}, ${s}%, ${l}%)`
			}}
		>
			{value.toFixed(2)}
		</div>
	)
}
