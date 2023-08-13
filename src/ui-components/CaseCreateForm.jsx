/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Case } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CaseCreateForm(props) {
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
    jurisdiction: "",
    court: "",
    judge: "",
    prosecutor: "",
    caseNumber: "",
    caseName: "",
  };
  const [jurisdiction, setJurisdiction] = React.useState(
    initialValues.jurisdiction
  );
  const [court, setCourt] = React.useState(initialValues.court);
  const [judge, setJudge] = React.useState(initialValues.judge);
  const [prosecutor, setProsecutor] = React.useState(initialValues.prosecutor);
  const [caseNumber, setCaseNumber] = React.useState(initialValues.caseNumber);
  const [caseName, setCaseName] = React.useState(initialValues.caseName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setJurisdiction(initialValues.jurisdiction);
    setCourt(initialValues.court);
    setJudge(initialValues.judge);
    setProsecutor(initialValues.prosecutor);
    setCaseNumber(initialValues.caseNumber);
    setCaseName(initialValues.caseName);
    setErrors({});
  };
  const validations = {
    jurisdiction: [],
    court: [],
    judge: [],
    prosecutor: [],
    caseNumber: [],
    caseName: [],
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
          jurisdiction,
          court,
          judge,
          prosecutor,
          caseNumber,
          caseName,
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
          await DataStore.save(new Case(modelFields));
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
      {...getOverrideProps(overrides, "CaseCreateForm")}
      {...rest}
    >
      <TextField
        label="Jurisdiction"
        isRequired={false}
        isReadOnly={false}
        value={jurisdiction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction: value,
              court,
              judge,
              prosecutor,
              caseNumber,
              caseName,
            };
            const result = onChange(modelFields);
            value = result?.jurisdiction ?? value;
          }
          if (errors.jurisdiction?.hasError) {
            runValidationTasks("jurisdiction", value);
          }
          setJurisdiction(value);
        }}
        onBlur={() => runValidationTasks("jurisdiction", jurisdiction)}
        errorMessage={errors.jurisdiction?.errorMessage}
        hasError={errors.jurisdiction?.hasError}
        {...getOverrideProps(overrides, "jurisdiction")}
      ></TextField>
      <TextField
        label="Court"
        isRequired={false}
        isReadOnly={false}
        value={court}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction,
              court: value,
              judge,
              prosecutor,
              caseNumber,
              caseName,
            };
            const result = onChange(modelFields);
            value = result?.court ?? value;
          }
          if (errors.court?.hasError) {
            runValidationTasks("court", value);
          }
          setCourt(value);
        }}
        onBlur={() => runValidationTasks("court", court)}
        errorMessage={errors.court?.errorMessage}
        hasError={errors.court?.hasError}
        {...getOverrideProps(overrides, "court")}
      ></TextField>
      <TextField
        label="Judge"
        isRequired={false}
        isReadOnly={false}
        value={judge}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction,
              court,
              judge: value,
              prosecutor,
              caseNumber,
              caseName,
            };
            const result = onChange(modelFields);
            value = result?.judge ?? value;
          }
          if (errors.judge?.hasError) {
            runValidationTasks("judge", value);
          }
          setJudge(value);
        }}
        onBlur={() => runValidationTasks("judge", judge)}
        errorMessage={errors.judge?.errorMessage}
        hasError={errors.judge?.hasError}
        {...getOverrideProps(overrides, "judge")}
      ></TextField>
      <TextField
        label="Prosecutor"
        isRequired={false}
        isReadOnly={false}
        value={prosecutor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction,
              court,
              judge,
              prosecutor: value,
              caseNumber,
              caseName,
            };
            const result = onChange(modelFields);
            value = result?.prosecutor ?? value;
          }
          if (errors.prosecutor?.hasError) {
            runValidationTasks("prosecutor", value);
          }
          setProsecutor(value);
        }}
        onBlur={() => runValidationTasks("prosecutor", prosecutor)}
        errorMessage={errors.prosecutor?.errorMessage}
        hasError={errors.prosecutor?.hasError}
        {...getOverrideProps(overrides, "prosecutor")}
      ></TextField>
      <TextField
        label="Case number"
        isRequired={false}
        isReadOnly={false}
        value={caseNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction,
              court,
              judge,
              prosecutor,
              caseNumber: value,
              caseName,
            };
            const result = onChange(modelFields);
            value = result?.caseNumber ?? value;
          }
          if (errors.caseNumber?.hasError) {
            runValidationTasks("caseNumber", value);
          }
          setCaseNumber(value);
        }}
        onBlur={() => runValidationTasks("caseNumber", caseNumber)}
        errorMessage={errors.caseNumber?.errorMessage}
        hasError={errors.caseNumber?.hasError}
        {...getOverrideProps(overrides, "caseNumber")}
      ></TextField>
      <TextField
        label="Case name"
        isRequired={false}
        isReadOnly={false}
        value={caseName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              jurisdiction,
              court,
              judge,
              prosecutor,
              caseNumber,
              caseName: value,
            };
            const result = onChange(modelFields);
            value = result?.caseName ?? value;
          }
          if (errors.caseName?.hasError) {
            runValidationTasks("caseName", value);
          }
          setCaseName(value);
        }}
        onBlur={() => runValidationTasks("caseName", caseName)}
        errorMessage={errors.caseName?.errorMessage}
        hasError={errors.caseName?.hasError}
        {...getOverrideProps(overrides, "caseName")}
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
