import { useGetLawyerQuery } from "../lawyers/lawyersSlice"

export const LawyerAssignee = ({ lawyerId, className }) => {
    const {
        data: lawyer,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetLawyerQuery({ id: lawyerId })

    let content

    if (isLoading) {
        content = <div className={className}>Loading...</div>
    } else if (isSuccess)  {
        content = <div className={className}>{lawyer.firstName} {lawyer.lastName}</div>
    }
    return content
}