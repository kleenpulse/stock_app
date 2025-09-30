import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export default function InputField({
	name,
	label,
	placeholder,
	type = "text",
	register,
	disabled,
	error,
	validation,
	value,
}: FormInputProps) {
	return (
		<div className="space-y-2">
			<Label htmlFor={name} className="form-label">
				{label}
			</Label>

			<Input
				id={name}
				type={type}
				placeholder={placeholder}
				disabled={disabled}
				value={value}
				className={cn("form-input", {
					"opacity-50 cursor-not-allowed": disabled,
				})}
				{...register(name, validation)}
			/>
			{error && <p className="px-1 text-xs text-red-600">{error.message}</p>}
		</div>
	);
}
