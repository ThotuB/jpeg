interface Props {
	theme: 'pink-purple' | 'yellow-purple' | 'orange-green' | 'white-black'
}

export default function Cassette({ theme }: Props) {
	const onClick = () => {
		localStorage.setItem('theme', theme)
		document.body.setAttribute('data-theme', theme)
	}

	return (
		<button
			type="button"
			data-theme={theme}
			onclick={onClick}
			class="flex w-24 flex-col items-stretch overflow-hidden rounded-lg transition-all hover:translate-y-4"
		>
			<div class="h-8 bg-gray-400 px-2 text-left font-mono text-2xl font-bold">VHS</div>
			<div class="h-4 bg-retro-1"></div>
			<div class="relative h-4 bg-retro-2">
				<div class="absolute -left-8 h-12 w-12 rotate-45 overflow-hidden rounded bg-primary">
					<div class="h-1 w-12 -rotate-45 bg-secondary"></div>
				</div>
			</div>
			<div class="h-4 bg-retro-3"></div>
			<div class="h-4 bg-retro-4"></div>
			<div class="h-4 bg-retro-5"></div>
			<div class="h-4 bg-retro-6"></div>
			<div class="h-6 bg-primary px-2 text-left font-mono font-bold text-white">T-120</div>
		</button>
	)
}
