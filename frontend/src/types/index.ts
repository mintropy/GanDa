import { ReactNode } from 'react';
import { PaletteMode } from '@mui/material';
import { Theme } from '@mui/material/styles';

export interface PropType {
	children: ReactNode;
}

export interface ContextType {
	theme: Theme;
	onEditMode: (mode: PaletteMode) => void;
}

export interface UploadedFileType extends File {
	preview?: string;
}

export interface FileFormPropType {
	files: Array<UploadedFileType>;
	setFiles: Function;
	setUploadState: Function;
}

export interface ResultPropType {
	files: Array<UploadedFileType>;
	uploadState: String;
	setUploadState: Function;
}