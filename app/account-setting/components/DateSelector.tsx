import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

// Generate year options from 1900 to current year
const currentYear = new Date().getFullYear();
const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const days = Array.from({ length: 31 }, (_, i) => i + 1);

// Update your form component:
export const DateSelector = ({ value, onChange }: { value: Date, onChange: (date: Date) => void }) => {
	const date = new Date(value);

	const handleChange = (field: 'year' | 'month' | 'day', value: number) => {
		const newDate = new Date(date);
		if (field === 'year') newDate.setFullYear(value);
		if (field === 'month') newDate.setMonth(value - 1);
		if (field === 'day') newDate.setDate(value);
		onChange(newDate);
	};

	return (
		<div className="flex gap-2" aria-label="Date selector">
			<div className="relative" aria-label="Year selector">
				<select
					value={date.getFullYear()}
					onChange={(e) => handleChange('year', parseInt(e.target.value))}
					className="px-4 py-2 relative rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[120px]"
				>
					{years.map(year => (
						<option key={year} value={year}>{year}</option>
					))}
				</select>
				<ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
			</div>
			<div className="relative" aria-label="Month selector">
				<select
					value={date.getMonth() + 1}
					onChange={(e) => handleChange('month', parseInt(e.target.value))}
					className="px-4 py-2 rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[100px]"
				>
					{months.map(month => (
						<option key={month} value={month}>{month.toString().padStart(2, '0')}</option>
					))}
				</select>
				<ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
			</div>
			<div className="relative" aria-label="Day selector">
				<select
					value={date.getDate()}
					onChange={(e) => handleChange('day', parseInt(e.target.value))}
					className="px-4 py-2 rounded-lg border border-zinc-300 appearance-none bg-white cursor-pointer w-[100px]"
				>
					{days.map(day => (
						<option key={day} value={day}>{day.toString().padStart(2, '0')}</option>
					))}
				</select>
				<ChevronDown className="absolute pointer-events-none right-2 top-1/2 -translate-y-1/2" />
			</div>
		</div>
	);
};
