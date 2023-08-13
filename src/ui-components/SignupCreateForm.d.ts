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
export declare type SignupCreateFormInputValues = {
    email?: string;
    firstName?: string;
    lastName?: string;
    cognitoID?: string;
    userID?: string;
};
export declare type SignupCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    cognitoID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupCreateFormOverridesProps = {
    SignupCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignupCreateFormProps = React.PropsWithChildren<{
    overrides?: SignupCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SignupCreateFormInputValues) => SignupCreateFormInputValues;
    onSuccess?: (fields: SignupCreateFormInputValues) => void;
    onError?: (fields: SignupCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignupCreateFormInputValues) => SignupCreateFormInputValues;
    onValidate?: SignupCreateFormValidationValues;
} & React.CSSProperties>;
export default function SignupCreateForm(props: SignupCreateFormProps): React.ReactElement;
