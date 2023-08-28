import { createPostJsonOptions } from "./functions/createPostJsonOptions"
import { URLS } from "../app/urls"

const ENV = process.env.REACT_APP_ENVIRONMENT || "dev";

export const logger = () => {

    const { loggerLambda } = URLS[ENV];

    const info = data => {
        console.log(data)

        // const postJsonOptions = createPostJsonOptions(data)

        // fetch(loggerLambda, postJsonOptions)
    }

    const error = (context, error) => {
        console.error("Context:", context, "\nError:", error)

        // const body = {context, error}

        // const postJsonOptions = createPostJsonOptions(body)

        // fetch(loggerLambda, postJsonOptions)
    }

    return {info, error}
}