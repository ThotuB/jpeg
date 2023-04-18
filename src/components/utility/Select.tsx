import { For, JSX, Show, createSignal } from "solid-js";

interface SelectProps {
	children: JSX.ArrayElement;
	length: number;
	selected?: number;
}

export default function Select(props: SelectProps) {
	const [open, setOpen] = createSignal(false);
	const [selected, setSelected] = createSignal(props.selected || 0);
	const [covered, setCovered] = createSignal(true);

	const toggleOpen = () => {
		setOpen(!open())
		setTimeout(() => {
			setCovered(!open())
		}, 300);
	};

	const handleSelect = (index: number) => {
		setSelected(index)
	}

	return (
		<div onClick={toggleOpen} class='flex flex-row-reverse gap-8 w-24'>
			<Show when={covered()}>
				<div
					class='absolute cursor-pointer w-24 h-full right-0 z-[100]'
				>
				</div>
			</Show>
			<For each={props.children}>
				{(option, index) => (
					<Option open={open()} index={index()} onSelect={handleSelect} zIndex={(index() + (props.length - selected() - 1)) % props.length}>
						{option}
					</Option>
				)}
			</For>
		</div>
	);
}

interface OptionProps {
	children: JSX.Element;
	open: boolean;
	index: number;
	zIndex: number;
	onSelect: (index: number) => void;
}

function Option(props: OptionProps) {
	const translateX = props.index * 8;

	return (
		<div
			style={{
				"transition": "z-index 0s, transform 0.3s",
				"transform": props.open ? `translateX(0)` : `translateX(${translateX}rem)`,
				"z-index": props.zIndex,
			}}
			onClick={() => props.onSelect(props.index)}
		>
			{props.children}
		</div>
	);
}