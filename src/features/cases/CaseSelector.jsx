import { useState } from 'react'

import { CaseNumberName } from './CaseNumberName'
import { PotentialCases } from './PotentialCases'

export const CaseSelector = ({ clientCases, caseInstance, caseHandler, caseName }) => {
    const [caseNumberName, setCaseNumberName] = useState("")

    const changeHandler = ({ target }) => {
        setCaseNumberName(target.value)
    }

    return (
        <div className="relative">
            {caseInstance === "" && (
                <>
                    <input type="text"
                        className="peer w-full h-10 border-b-2 border-gray-400 text-gray-900 placeholder-transparent focus:outline-none focus:border-slate-600"
                        id="caseNumber"
                        name="caseNumber"
                        autoComplete="caseNumber"
                        value={caseNumberName}
                        onChange={changeHandler}
                        placeholder="caseNumber"
                    />
                    <label htmlFor="clientName" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Case</label>
                    <PotentialCases clientCases={clientCases}
                        caseNumberName={caseNumberName}
                        caseHandler={caseHandler}
                    />
                </>
            )}
            {caseInstance > 0 && <CaseNumberName caseId={caseInstance} />}
        </div>
    )
}