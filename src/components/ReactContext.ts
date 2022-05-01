import React from 'react';
import { IMisdemeanour } from '../generate_misdemeanours';

export const SelectedMisdemeanoursContext = React.createContext<Array<IMisdemeanour>>([]);
export const SelectedItemContext = React.createContext<string>('filter');
export const SubjectContext = React.createContext<string>('');
export const SelectedReasonContext = React.createContext<string>('Select');
export const ReasonTextContext = React.createContext<string>('');