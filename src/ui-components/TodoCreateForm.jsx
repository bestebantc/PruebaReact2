/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Todo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function TodoCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: "",
    s10: "",
  };
  const [s1, setS1] = React.useState(initialValues.s1);
  const [s2, setS2] = React.useState(initialValues.s2);
  const [s3, setS3] = React.useState(initialValues.s3);
  const [s4, setS4] = React.useState(initialValues.s4);
  const [s5, setS5] = React.useState(initialValues.s5);
  const [s6, setS6] = React.useState(initialValues.s6);
  const [s7, setS7] = React.useState(initialValues.s7);
  const [s8, setS8] = React.useState(initialValues.s8);
  const [s9, setS9] = React.useState(initialValues.s9);
  const [s10, setS10] = React.useState(initialValues.s10);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setS1(initialValues.s1);
    setS2(initialValues.s2);
    setS3(initialValues.s3);
    setS4(initialValues.s4);
    setS5(initialValues.s5);
    setS6(initialValues.s6);
    setS7(initialValues.s7);
    setS8(initialValues.s8);
    setS9(initialValues.s9);
    setS10(initialValues.s10);
    setErrors({});
  };
  const validations = {
    s1: [],
    s2: [],
    s3: [],
    s4: [],
    s5: [],
    s6: [],
    s7: [],
    s8: [],
    s9: [],
    s10: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          s1,
          s2,
          s3,
          s4,
          s5,
          s6,
          s7,
          s8,
          s9,
          s10,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Todo(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "TodoCreateForm")}
      {...rest}
    >
      <TextField
        label="S1"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s1}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1: value,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s1 ?? value;
          }
          if (errors.s1?.hasError) {
            runValidationTasks("s1", value);
          }
          setS1(value);
        }}
        onBlur={() => runValidationTasks("s1", s1)}
        errorMessage={errors.s1?.errorMessage}
        hasError={errors.s1?.hasError}
        {...getOverrideProps(overrides, "s1")}
      ></TextField>
      <TextField
        label="S2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s2}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2: value,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s2 ?? value;
          }
          if (errors.s2?.hasError) {
            runValidationTasks("s2", value);
          }
          setS2(value);
        }}
        onBlur={() => runValidationTasks("s2", s2)}
        errorMessage={errors.s2?.errorMessage}
        hasError={errors.s2?.hasError}
        {...getOverrideProps(overrides, "s2")}
      ></TextField>
      <TextField
        label="S3"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s3}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3: value,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s3 ?? value;
          }
          if (errors.s3?.hasError) {
            runValidationTasks("s3", value);
          }
          setS3(value);
        }}
        onBlur={() => runValidationTasks("s3", s3)}
        errorMessage={errors.s3?.errorMessage}
        hasError={errors.s3?.hasError}
        {...getOverrideProps(overrides, "s3")}
      ></TextField>
      <TextField
        label="S4"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s4}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4: value,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s4 ?? value;
          }
          if (errors.s4?.hasError) {
            runValidationTasks("s4", value);
          }
          setS4(value);
        }}
        onBlur={() => runValidationTasks("s4", s4)}
        errorMessage={errors.s4?.errorMessage}
        hasError={errors.s4?.hasError}
        {...getOverrideProps(overrides, "s4")}
      ></TextField>
      <TextField
        label="S5"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s5}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5: value,
              s6,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s5 ?? value;
          }
          if (errors.s5?.hasError) {
            runValidationTasks("s5", value);
          }
          setS5(value);
        }}
        onBlur={() => runValidationTasks("s5", s5)}
        errorMessage={errors.s5?.errorMessage}
        hasError={errors.s5?.hasError}
        {...getOverrideProps(overrides, "s5")}
      ></TextField>
      <TextField
        label="S6"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s6}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5,
              s6: value,
              s7,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s6 ?? value;
          }
          if (errors.s6?.hasError) {
            runValidationTasks("s6", value);
          }
          setS6(value);
        }}
        onBlur={() => runValidationTasks("s6", s6)}
        errorMessage={errors.s6?.errorMessage}
        hasError={errors.s6?.hasError}
        {...getOverrideProps(overrides, "s6")}
      ></TextField>
      <TextField
        label="S7"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s7}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7: value,
              s8,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s7 ?? value;
          }
          if (errors.s7?.hasError) {
            runValidationTasks("s7", value);
          }
          setS7(value);
        }}
        onBlur={() => runValidationTasks("s7", s7)}
        errorMessage={errors.s7?.errorMessage}
        hasError={errors.s7?.hasError}
        {...getOverrideProps(overrides, "s7")}
      ></TextField>
      <TextField
        label="S8"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s8}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8: value,
              s9,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s8 ?? value;
          }
          if (errors.s8?.hasError) {
            runValidationTasks("s8", value);
          }
          setS8(value);
        }}
        onBlur={() => runValidationTasks("s8", s8)}
        errorMessage={errors.s8?.errorMessage}
        hasError={errors.s8?.hasError}
        {...getOverrideProps(overrides, "s8")}
      ></TextField>
      <TextField
        label="S9"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s9}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9: value,
              s10,
            };
            const result = onChange(modelFields);
            value = result?.s9 ?? value;
          }
          if (errors.s9?.hasError) {
            runValidationTasks("s9", value);
          }
          setS9(value);
        }}
        onBlur={() => runValidationTasks("s9", s9)}
        errorMessage={errors.s9?.errorMessage}
        hasError={errors.s9?.hasError}
        {...getOverrideProps(overrides, "s9")}
      ></TextField>
      <TextField
        label="S10"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={s10}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              s1,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10: value,
            };
            const result = onChange(modelFields);
            value = result?.s10 ?? value;
          }
          if (errors.s10?.hasError) {
            runValidationTasks("s10", value);
          }
          setS10(value);
        }}
        onBlur={() => runValidationTasks("s10", s10)}
        errorMessage={errors.s10?.errorMessage}
        hasError={errors.s10?.hasError}
        {...getOverrideProps(overrides, "s10")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
