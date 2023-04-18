interface Props {
	theme: 'pink-purple' | 'yellow-purple' | 'orange-green' | 'white-black';
}

export default function Cassette({ theme }: Props) {
	const onClick = () => {
		localStorage.setItem('theme', theme);
		document.body.setAttribute('data-theme', theme);
	}

	return (
		<button
			type='button'
			data-theme={theme}
			onclick={onClick}
			class='w-24 flex flex-col items-stretch rounded-lg overflow-hidden transition-all hover:translate-y-4'
		>
			<div class='h-8 bg-gray-400 text-2xl font-mono font-bold text-left px-2'>
				VHS
			</div>
			<div class='h-4 bg-retro-1'></div>
			<div class='relative h-4 bg-retro-2'>
				<div
					class='absolute w-12 h-12 bg-primary rounded -left-8 rotate-45 overflow-hidden'
				>
					<div class='w-12 h-1 bg-secondary -rotate-45'></div>
				</div>
			</div>
			<div class='h-4 bg-retro-3'></div>
			<div class='h-4 bg-retro-4'></div>
			<div class='h-4 bg-retro-5'></div>
			<div class='h-4 bg-retro-6'></div>
			<div class='h-6 bg-primary font-mono font-bold text-white px-2 text-left'>
				T-120
			</div>
		</button>
	)
}