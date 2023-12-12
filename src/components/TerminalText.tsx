import { createSignal } from 'solid-js'

interface Props {
	text: string[]
}

export default function TerminalText({ text: finalText }: Props) {
	const joinedText = finalText.join('\n')

	const [text, setText] = createSignal('')

	const type = (char: number): void => {
		if (char === joinedText.length) return
		const nextChar = joinedText[char]
		setText(text() + nextChar)
		setTimeout(() => type(char + 1), 20)
	}

	type(0)

	return (
		<div class="relative">
			<div class="absolute">
				{text()
					.split('\n')
					.map((line, i) => (
						<p>
							$ {line}
							{i === text().split('\n').length - 1 && (
								<span class="animate-terminal">█</span>
							)}
						</p>
					))}
			</div>
			<div class="invisible">
				{finalText.map((line, i) => (
					<p>$ {line}</p>
				))}
			</div>
		</div>
	)
}

const typeWithDelay = (char: number, delay: number, fn: (char: number) => void) => {
	setTimeout(() => fn(char + 1), delay)
}

const typeWithPause = (char: number, nextChar: string, fn: (char: number) => void) => {
	const pause = nextChar === ' ' && Math.random() * 100 > 70 ? Math.random() * 200 : 0
	setTimeout(() => fn(char + 1), 25 + pause)
}
