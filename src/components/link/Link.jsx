import { useLocation, useNavigate } from "react-router-dom"

export const Link = ({ path, text, color, onClick, inline }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const currentPage = location.pathname;

    const clickHandler = event => {
        event.preventDefault();
        const href = event.target.dataset['href'] || path
        navigate(href)
    }

    const keydownHandler = ({ target, keyCode }) => {
        if (keyCode === 13) {
            navigate(`/${target.dataset['href']}`)
        }
    }

    // There are 3 link states to consider:

    // 1. current resource view is list page -> bold text but no hyperlink
    if (currentPage === path && !location.search) {
        return <div className={`text-${color} font-bold`}>{text || path}</div>
    }

    // 2. current resource view is detail page -> bold text and hyperlink
    else if (currentPage?.split("/")[1] === path.split("/")[1]) {
        return (
            <div tabIndex={0} onKeyDown={keydownHandler} data-href={`${path}`}>
                <a href={path}
                    className={`text-${color} font-bold capitalize`}
                    onKeyDown={keydownHandler}
                    onClick={onClick || clickHandler}
                    data-href={`${path}`}
                >{text || path}</a>
            </div>
        )
    }

    // 3. current resource view is unrelated to link -> normal font weight hyperlink
    return (
        <div tabIndex={0} onKeyDown={keydownHandler} data-href={`${path}`} className={`${inline && "inline"}`}>
            <a href={path}
                className={`text-${color} capitalize`}
                onKeyDown={keydownHandler}
                onClick={onClick || clickHandler}
                data-href={`${path}`}
            >{text || path}</a>
        </div>
    )


}