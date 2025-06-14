import { useRef, useState, useEffect } from 'react'

export const useMeasure = () => {
    const measureRef = useRef(null)

    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    })

    const [observer] = useState(() => {
        // Check if ResizeObserver is defined in current env (could be browser, node.js, jsdom etc.).
        if (typeof ResizeObserver === 'undefined') return null

        return new ResizeObserver(([entry]) => {
            // TODO not used anymore, document patching react-virtualized-auto-sizer
            /* patched: do not trigger resize when display:none makes element be hidden */
            if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
                setBounds(entry.contentRect)
            }
        })
    })

    useEffect(() => {
        if (measureRef.current && observer !== null) {
            observer.observe(measureRef.current)
        }

        return () => {
            if (observer !== null) observer.disconnect()
        }
    }, [observer])

    return [measureRef, bounds]
}
