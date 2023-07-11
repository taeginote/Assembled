import Button from './Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			options: ['default-white', 'default-reverse', 'default'],
			control: { type: 'radio' },
		},
		shape: {
			options: ['default'],
			control: { type: 'radio' },
		},
		size: {
			options: ['normal', 'big', 'default'],
			control: { type: 'radio' },
		},
		fontSize: {
			options: ['default'],
			control: { type: 'radio' },
		},
	},
}

export const Default = {
	args: {
		variant: 'default',
		shape: 'default',
		size: 'default',
		fontSize: 'default',
		children: 'Button Test',
	},
}
