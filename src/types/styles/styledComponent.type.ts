import { IStyledComponentBase } from 'styled-components/dist/types';

import { FastOmitType } from "./fastOmit.type";

export type StyledComponent = IStyledComponentBase<'web', FastOmitType> & string;
