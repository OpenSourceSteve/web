import { ClientAssignee } from "./ClientAssignee"
import { LawyerAssignee } from "./LawyerAssignee"

export const Assignee = ({clientId, lawyerId, assignee, className}) => {
    if (assignee === clientId) {
        return <ClientAssignee clientId={clientId} className={className} />
    }

    if (assignee === lawyerId) {
        return <LawyerAssignee lawyerId={lawyerId} className={className} />
    }

    return <div>Unassigned</div>
}