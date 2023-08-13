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
export declare type CaseCreateFormInputValues = {
    jurisdiction?: string;
    court?: string;
    judge?: string;
    prosecutor?: string;
    caseNumber?: string;
    caseName?: string;
};
export declare type CaseCreateFormValidationValues = {
    jurisdiction?: ValidationFunction<string>;
    court?: ValidationFunction<string>;
    judge?: ValidationFunction<string>;
    prosecutor?: ValidationFunction<string>;
    caseNumber?: ValidationFunction<string>;
    caseName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseCreateFormOverridesProps = {
    CaseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jurisdiction?: PrimitiveOverrideProps<TextFieldProps>;
    court?: PrimitiveOverrideProps<TextFieldProps>;
    judge?: PrimitiveOverrideProps<TextFieldProps>;
    prosecutor?: PrimitiveOverrideProps<TextFieldProps>;
    caseNumber?: PrimitiveOverrideProps<TextFieldProps>;
    caseName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseCreateFormProps = React.PropsWithChildren<{
    overrides?: CaseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CaseCreateFormInputValues) => CaseCreateFormInputValues;
    onSuccess?: (fields: CaseCreateFormInputValues) => void;
    onError?: (fields: CaseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseCreateFormInputValues) => CaseCreateFormInputValues;
    onValidate?: CaseCreateFormValidationValues;
} & React.CSSProperties>;
export default function CaseCreateForm(props: CaseCreateFormProps): React.ReactElement;
