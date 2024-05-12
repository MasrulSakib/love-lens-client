import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Love Lens`
    }, [title])
}

export default useTitle;