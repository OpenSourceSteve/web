/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Event } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function EventUpdateForm(props) {
  const {
    id: idProp,
    event: eventModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    caseID: "",
    type: "",
    startDatetime: "",
    duration: "",
    location: "",
    link: "",
    phone: "",
    title: "",
    description: "",
  };
  const [caseID, setCaseID] = React.useState(initialValues.caseID);
  const [type, setType] = React.useState(initialValues.type);
  const [startDatetime, setStartDatetime] = React.useState(
    initialValues.startDatetime
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [location, setLocation] = React.useState(initialValues.location);
  const [link, setLink] = React.useState(initialValues.link);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = eventRecord
      ? { ...initialValues, ...eventRecord }
      : initialValues;
    setCaseID(cleanValues.caseID);
    setType(cleanValues.type);
    setStartDatetime(cleanValues.startDatetime);
    setDuration(cleanValues.duration);
    setLocation(cleanValues.location);
    setLink(cleanValues.link);
    setPhone(cleanValues.phone);
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [eventRecord, setEventRecord] = React.useState(eventModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Event, idProp)
        : eventModelProp;
      setEventRecord(record);
    };
    queryData();
  }, [idProp, eventModelProp]);
  React.useEffect(resetStateValues, [eventRecord]);
  const validations = {
    caseID: [{ type: "Required" }],
    type: [],
    startDatetime: [{ type: "Required" }],
    duration: [],
    location: [],
    link: [{ type: "URL" }],
    phone: [],
    title: [],
    description: [],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          caseID,
          type,
          startDatetime,
          duration,
          location,
          link,
          phone,
          title,
          description,
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
            Event.copyOf(eventRecord, (updated) => {
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
      {...getOverrideProps(overrides, "EventUpdateForm")}
      {...rest}
    >
      <TextField
        label="Case id"
        isRequired={true}
        isReadOnly={false}
        value={caseID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID: value,
              type,
              startDatetime,
              duration,
              location,
              link,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.caseID ?? value;
          }
          if (errors.caseID?.hasError) {
            runValidationTasks("caseID", value);
          }
          setCaseID(value);
        }}
        onBlur={() => runValidationTasks("caseID", caseID)}
        errorMessage={errors.caseID?.errorMessage}
        hasError={errors.caseID?.hasError}
        {...getOverrideProps(overrides, "caseID")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID,
              type: value,
              startDatetime,
              duration,
              location,
              link,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Court appearance"
          value="COURT_APPEARANCE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Client meeting"
          value="CLIENT_MEETING"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="Staff meeting"
          value="STAFF_MEETING"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
        <option
          children="External meeting"
          value="EXTERNAL_MEETING"
          {...getOverrideProps(overrides, "typeoption3")}
        ></option>
        <option
          children="Other hours billable"
          value="OTHER_HOURS_BILLABLE"
          {...getOverrideProps(overrides, "typeoption4")}
        ></option>
      </SelectField>
      <TextField
        label="Start datetime"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={startDatetime && convertToLocal(new Date(startDatetime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime: value,
              duration,
              location,
              link,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.startDatetime ?? value;
          }
          if (errors.startDatetime?.hasError) {
            runValidationTasks("startDatetime", value);
          }
          setStartDatetime(value);
        }}
        onBlur={() => runValidationTasks("startDatetime", startDatetime)}
        errorMessage={errors.startDatetime?.errorMessage}
        hasError={errors.startDatetime?.hasError}
        {...getOverrideProps(overrides, "startDatetime")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime,
              duration: value,
              location,
              link,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={false}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime,
              duration,
              location: value,
              link,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Link"
        isRequired={false}
        isReadOnly={false}
        value={link}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime,
              duration,
              location,
              link: value,
              phone,
              title,
              description,
            };
            const result = onChange(modelFields);
            value = result?.link ?? value;
          }
          if (errors.link?.hasError) {
            runValidationTasks("link", value);
          }
          setLink(value);
        }}
        onBlur={() => runValidationTasks("link", link)}
        errorMessage={errors.link?.errorMessage}
        hasError={errors.link?.hasError}
        {...getOverrideProps(overrides, "link")}
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
              caseID,
              type,
              startDatetime,
              duration,
              location,
              link,
              phone: value,
              title,
              description,
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
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime,
              duration,
              location,
              link,
              phone,
              title: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              caseID,
              type,
              startDatetime,
              duration,
              location,
              link,
              phone,
              title,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
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
          isDisabled={!(idProp || eventModelProp)}
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
              !(idProp || eventModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
