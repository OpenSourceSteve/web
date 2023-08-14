import { createPostJsonOptions } from "./functions/createPostJsonOptions"
import { LAMBDAS } from "../app/lambdas"
import { getEnv } from "./functions/getEnv";

export const logger = () => {

    const ENV = getEnv()

    const loggerURL = LAMBDAS[ENV].loggerURL;

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