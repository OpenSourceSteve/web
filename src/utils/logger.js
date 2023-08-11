import { LAMBDAS } from "../app/lambdas"
import { createPostJsonOptions } from "./functions/createPostJsonOptions"

export const logger = () => {

    const loggerURL = LAMBDAS.loggerURL;

    const info = data => {
        console.log(data)

        const postJsonOptions = createPostJsonOptions(data)

        fetch(loggerURL, postJsonOptions)
    }

    const error = (context, error) => {
        console.error("Context:", context, "\nError:", error)

        const body = {context, error}

        const postJsonOptions = createPostJsonOptions(body)

        fetch(loggerURL, postJsonOptions)
    }

    return {info, error}
}