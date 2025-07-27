import { IStyledComponentBase } from 'styled-components/dist/types';

export type StyledComponent<T extends object = {}> = IStyledComponentBase<'web', T> & string;
