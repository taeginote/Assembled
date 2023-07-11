import { ButtonHTMLAttributes } from 'react'
import Button from './Button'
import { Story } from '@storybook/react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'default-reverse' | 'default-white'
	shape?: 'default'
	size?: 'default' | 'big' | 'normal'
	fontSize?: 'default'
}

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

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
	variant: 'default',
	shape: 'default',
	size: 'default',
	fontSize: 'default',
}
