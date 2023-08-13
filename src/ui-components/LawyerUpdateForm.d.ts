/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Lawyer } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LawyerUpdateFormInputValues = {
    userID?: string;
    firstName?: string;
    lastName?: string;
    barAssociation?: string;
    licenseNumber?: string;
    email?: string;
    phone?: string;
    owner?: string;
};
export declare type LawyerUpdateFormValidationValues = {
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
export declare type LawyerUpdateFormOverridesProps = {
    LawyerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    barAssociation?: PrimitiveOverrideProps<TextFieldProps>;
    licenseNumber?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LawyerUpdateFormProps = React.PropsWithChildren<{
    overrides?: LawyerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    lawyer?: Lawyer;
    onSubmit?: (fields: LawyerUpdateFormInputValues) => LawyerUpdateFormInputValues;
    onSuccess?: (fields: LawyerUpdateFormInputValues) => void;
    onError?: (fields: LawyerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LawyerUpdateFormInputValues) => LawyerUpdateFormInputValues;
    onValidate?: LawyerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LawyerUpdateForm(props: LawyerUpdateFormProps): React.ReactElement;
