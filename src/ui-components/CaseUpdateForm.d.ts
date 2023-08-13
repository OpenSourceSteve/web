/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Case } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CaseUpdateFormInputValues = {
    jurisdiction?: string;
    court?: string;
    judge?: string;
    prosecutor?: string;
    caseNumber?: string;
    caseName?: string;
};
export declare type CaseUpdateFormValidationValues = {
    jurisdiction?: ValidationFunction<string>;
    court?: ValidationFunction<string>;
    judge?: ValidationFunction<string>;
    prosecutor?: ValidationFunction<string>;
    caseNumber?: ValidationFunction<string>;
    caseName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CaseUpdateFormOverridesProps = {
    CaseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    jurisdiction?: PrimitiveOverrideProps<TextFieldProps>;
    court?: PrimitiveOverrideProps<TextFieldProps>;
    judge?: PrimitiveOverrideProps<TextFieldProps>;
    prosecutor?: PrimitiveOverrideProps<TextFieldProps>;
    caseNumber?: PrimitiveOverrideProps<TextFieldProps>;
    caseName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CaseUpdateFormProps = React.PropsWithChildren<{
    overrides?: CaseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    case?: Case;
    onSubmit?: (fields: CaseUpdateFormInputValues) => CaseUpdateFormInputValues;
    onSuccess?: (fields: CaseUpdateFormInputValues) => void;
    onError?: (fields: CaseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CaseUpdateFormInputValues) => CaseUpdateFormInputValues;
    onValidate?: CaseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CaseUpdateForm(props: CaseUpdateFormProps): React.ReactElement;
