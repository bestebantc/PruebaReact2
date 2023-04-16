/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Todo } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoUpdateFormInputValues = {
    s1?: number;
    s2?: number;
    s3?: number;
    s4?: number;
    s5?: number;
    s6?: number;
    s7?: number;
    s8?: number;
    s9?: number;
    s10?: number;
};
export declare type TodoUpdateFormValidationValues = {
    s1?: ValidationFunction<number>;
    s2?: ValidationFunction<number>;
    s3?: ValidationFunction<number>;
    s4?: ValidationFunction<number>;
    s5?: ValidationFunction<number>;
    s6?: ValidationFunction<number>;
    s7?: ValidationFunction<number>;
    s8?: ValidationFunction<number>;
    s9?: ValidationFunction<number>;
    s10?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoUpdateFormOverridesProps = {
    TodoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    s1?: PrimitiveOverrideProps<TextFieldProps>;
    s2?: PrimitiveOverrideProps<TextFieldProps>;
    s3?: PrimitiveOverrideProps<TextFieldProps>;
    s4?: PrimitiveOverrideProps<TextFieldProps>;
    s5?: PrimitiveOverrideProps<TextFieldProps>;
    s6?: PrimitiveOverrideProps<TextFieldProps>;
    s7?: PrimitiveOverrideProps<TextFieldProps>;
    s8?: PrimitiveOverrideProps<TextFieldProps>;
    s9?: PrimitiveOverrideProps<TextFieldProps>;
    s10?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todo?: Todo;
    onSubmit?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onSuccess?: (fields: TodoUpdateFormInputValues) => void;
    onError?: (fields: TodoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoUpdateFormInputValues) => TodoUpdateFormInputValues;
    onValidate?: TodoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoUpdateForm(props: TodoUpdateFormProps): React.ReactElement;
