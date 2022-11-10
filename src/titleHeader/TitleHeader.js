import { useEffect } from "react"

const TitleHeader = title => {
    useEffect(() => {
        document.title = `${title}`;
    }, [title])
}

export default TitleHeader;