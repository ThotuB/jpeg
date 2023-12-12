export const themes = ['pink-purple', 'yellow-purple', 'orange-green', 'white-black'] as const
export type Theme = (typeof themes)[number]
