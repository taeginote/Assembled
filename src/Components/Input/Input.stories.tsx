import Input from './Input'

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		status: {
			options: ['success', 'error', 'default'],
			control: { type: 'radio' },
		},
	},
}

export const Default = {
	args: {
		status: 'default',
		value: 'Input Test',
	},
}
