/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Lawyer } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LawyerUpdateForm(props) {
  const {
    id: idProp,
    lawyer: lawyerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    firstName: "",
    lastName: "",
    barAssociation: "",
    licenseNumber: "",
    email: "",
    phone: "",
    owner: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [barAssociation, setBarAssociation] = React.useState(
    initialValues.barAssociation
  );
  const [licenseNumber, setLicenseNumber] = React.useState(
    initialValues.licenseNumber
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = lawyerRecord
      ? { ...initialValues, ...lawyerRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setBarAssociation(cleanValues.barAssociation);
    setLicenseNumber(cleanValues.licenseNumber);
    setEmail(cleanValues.email);
    setPhone(cleanValues.phone);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [lawyerRecord, setLawyerRecord] = React.useState(lawyerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Lawyer, idProp)
        : lawyerModelProp;
      setLawyerRecord(record);
    };
    queryData();
  }, [idProp, lawyerModelProp]);
  React.useEffect(resetStateValues, [lawyerRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    firstName: [],
    lastName: [],
    barAssociation: [],
    licenseNumber: [],
    email: [{ type: "Email" }],
    phone: [],
    owner: [{ type: "Required" }],
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
          userID,
          firstName,
          lastName,
          barAssociation,
          licenseNumber,
          email,
          phone,
          owner,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Lawyer.copyOf(lawyerRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LawyerUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              firstName,
              lastName,
              barAssociation,
              licenseNumber,
              email,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName: value,
              lastName,
              barAssociation,
              licenseNumber,
              email,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName: value,
              barAssociation,
              licenseNumber,
              email,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Bar association"
        isRequired={false}
        isReadOnly={false}
        value={barAssociation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              barAssociation: value,
              licenseNumber,
              email,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.barAssociation ?? value;
          }
          if (errors.barAssociation?.hasError) {
            runValidationTasks("barAssociation", value);
          }
          setBarAssociation(value);
        }}
        onBlur={() => runValidationTasks("barAssociation", barAssociation)}
        errorMessage={errors.barAssociation?.errorMessage}
        hasError={errors.barAssociation?.hasError}
        {...getOverrideProps(overrides, "barAssociation")}
      ></TextField>
      <TextField
        label="License number"
        isRequired={false}
        isReadOnly={false}
        value={licenseNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              barAssociation,
              licenseNumber: value,
              email,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.licenseNumber ?? value;
          }
          if (errors.licenseNumber?.hasError) {
            runValidationTasks("licenseNumber", value);
          }
          setLicenseNumber(value);
        }}
        onBlur={() => runValidationTasks("licenseNumber", licenseNumber)}
        errorMessage={errors.licenseNumber?.errorMessage}
        hasError={errors.licenseNumber?.hasError}
        {...getOverrideProps(overrides, "licenseNumber")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              barAssociation,
              licenseNumber,
              email: value,
              phone,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              barAssociation,
              licenseNumber,
              email,
              phone: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={true}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              firstName,
              lastName,
              barAssociation,
              licenseNumber,
              email,
              phone,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || lawyerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || lawyerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
