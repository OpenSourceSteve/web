/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EventCreateFormInputValues = {
    caseID?: string;
    type?: string;
    startDatetime?: string;
    duration?: number;
    location?: string;
    link?: string;
    phone?: string;
    title?: string;
    description?: string;
};
export declare type EventCreateFormValidationValues = {
    caseID?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    startDatetime?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    location?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventCreateFormOverridesProps = {
    EventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    caseID?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    startDatetime?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    link?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventCreateFormProps = React.PropsWithChildren<{
    overrides?: EventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventCreateFormInputValues) => EventCreateFormInputValues;
    onSuccess?: (fields: EventCreateFormInputValues) => void;
    onError?: (fields: EventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventCreateFormInputValues) => EventCreateFormInputValues;
    onValidate?: EventCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventCreateForm(props: EventCreateFormProps): React.ReactElement;
