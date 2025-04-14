interface RadioButtonProps {
	label: string;
	checked?: boolean;
	name: string;
	onChange?: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
	label,
	checked,
	name,
	onChange,
}) => {
	return (
		<label className="flex gap-2.5 items-center cursor-pointer" aria-label={label}>
			<div
				className={`flex flex-col justify-center p-1 items-center rounded-full border border-solid border-zinc-300 w-5 h-5`}
				aria-label={label}
			>
				{checked && (
					<div className="flex shrink-0 w-3.5 h-3.5 rounded-full bg-neutral-400" />
				)}
			</div>
			<span className="text-base font-medium text-black">{label}</span>
			<input
				type="radio"
				name={name}
				checked={checked}
				onChange={onChange}
				className="sr-only"
			/>
		</label>
	);
};
