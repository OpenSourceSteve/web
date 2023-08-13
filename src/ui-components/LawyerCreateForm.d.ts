/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LawyerCreateFormInputValues = {
    userID?: string;
    firstName?: string;
    lastName?: string;
    barAssociation?: string;
    licenseNumber?: string;
    email?: string;
    phone?: string;
    owner?: string;
};
export declare type LawyerCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    barAssociation?: ValidationFunction<string>;
    licenseNumber?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LawyerCreateFormOverridesProps = {
    LawyerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    barAssociation?: PrimitiveOverrideProps<TextFieldProps>;
    licenseNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LawyerCreateFormProps = React.PropsWithChildren<{
    overrides?: LawyerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LawyerCreateFormInputValues) => LawyerCreateFormInputValues;
    onSuccess?: (fields: LawyerCreateFormInputValues) => void;
    onError?: (fields: LawyerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LawyerCreateFormInputValues) => LawyerCreateFormInputValues;
    onValidate?: LawyerCreateFormValidationValues;
} & React.CSSProperties>;
export default function LawyerCreateForm(props: LawyerCreateFormProps): React.ReactElement;
