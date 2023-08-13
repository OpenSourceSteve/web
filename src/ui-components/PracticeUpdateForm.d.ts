/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Practice } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PracticeUpdateFormInputValues = {
    name?: string;
    owner?: string;
};
export declare type PracticeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PracticeUpdateFormOverridesProps = {
    PracticeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PracticeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PracticeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    practice?: Practice;
    onSubmit?: (fields: PracticeUpdateFormInputValues) => PracticeUpdateFormInputValues;
    onSuccess?: (fields: PracticeUpdateFormInputValues) => void;
    onError?: (fields: PracticeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PracticeUpdateFormInputValues) => PracticeUpdateFormInputValues;
    onValidate?: PracticeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PracticeUpdateForm(props: PracticeUpdateFormProps): React.ReactElement;
