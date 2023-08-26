import { createPostJsonOptions } from "./functions/createPostJsonOptions"
import { getEnv } from "./functions/getEnv"
import { URLS } from "../app/urls"

export const logger = () => {

    const ENV = getEnv()

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