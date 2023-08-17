import { createPostJsonOptions } from "./functions/createPostJsonOptions"
import { getEnv } from "./functions/getEnv"
import { LAMBDAS } from "../app/lambdas"

export const logger = () => {

    const ENV = getEnv()

    const { loggerURL } = LAMBDAS[ENV];

    const info = data => {
        console.log(data)

        // const postJsonOptions = createPostJsonOptions(data)

        // fetch(loggerURL, postJsonOptions)
    }

    const error = (context, error) => {
        console.error("Context:", context, "\nError:", error)

        // const body = {context, error}

        // const postJsonOptions = createPostJsonOptions(body)

        // fetch(loggerURL, postJsonOptions)
    }

    return {info, error}
}