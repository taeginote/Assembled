import { InputHTMLAttributes } from 'react'
import Input from './Input'
import { Story } from '@storybook/react'

export interface InputProps extends InputHTMLAttributes<HTMLButtonElement> {
	status?: 'success' | 'error' | 'default'
}

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

const Template: Story<InputProps> = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
	status: 'default',
}
