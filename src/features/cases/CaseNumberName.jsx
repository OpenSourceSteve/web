export const CaseNumberName = ({ caseInstance }) => (
    <div id="caseNumberName">{caseInstance.caseNumber || "No case number"}: {caseInstance.caseName || "No case name"}</div>
)