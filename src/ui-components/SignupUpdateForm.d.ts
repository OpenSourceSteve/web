/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Signup } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SignupUpdateFormInputValues = {
    email?: string;
    firstName?: string;
    lastName?: string;
    cognitoID?: string;
    userID?: string;
};
export declare type SignupUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    cognitoID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignupUpdateFormOverridesProps = {
    SignupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    cognitoID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SignupUpdateFormProps = React.PropsWithChildren<{
    overrides?: SignupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    signup?: Signup;
    onSubmit?: (fields: SignupUpdateFormInputValues) => SignupUpdateFormInputValues;
    onSuccess?: (fields: SignupUpdateFormInputValues) => void;
    onError?: (fields: SignupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SignupUpdateFormInputValues) => SignupUpdateFormInputValues;
    onValidate?: SignupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SignupUpdateForm(props: SignupUpdateFormProps): React.ReactElement;
