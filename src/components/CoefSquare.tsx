interface Props {
    value: number;
}

export default function CoefSquare({ value }: Props) {
    const computedStyle = getComputedStyle(document.body);

    //     const h1 = parseInt(computedStyle.getPropertyValue('--h-primary'));
    //     const s1 = parseInt(computedStyle.getPropertyValue('--s-primary'));
    //     const l1 = parseInt(computedStyle.getPropertyValue('--l-primary'));
    // 
    //     const h2 = parseInt(computedStyle.getPropertyValue('--h-secondary'));
    //     const s2 = parseInt(computedStyle.getPropertyValue('--s-secondary'));
    //     const l2 = parseInt(computedStyle.getPropertyValue('--l-secondary'));

    const h1 = 0;
    const s1 = 0;
    const l1 = 0;

    const h2 = 0;
    const s2 = 0;
    const l2 = 100;

    const progress = (value + 1) / 2;

    const h = h1 + (h2 - h1) * progress;
    const s = s1 + (s2 - s1) * progress;
    const l = l1 + (l2 - l1) * progress;

    return (
        <div
            class={`flex justify-center border-4 border-secondary items-center w-20 h-20 ${value > 0 ? 'text-primary' : 'text-secondary'}`}
            style={{
                'background-color': `hsl(${h}, ${s}%, ${l}%)`,
            }}
        >
            {value.toFixed(2)}
        </div>
    );
}