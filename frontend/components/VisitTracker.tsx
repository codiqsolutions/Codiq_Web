'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function VisitTracker() {
    const pathname = usePathname()

    useEffect(() => {
        // Don't track admin pages
        if (pathname.startsWith('/admin') || pathname.startsWith('/login')) return

        fetch('/api/visits', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                path: pathname,
                referrer: document.referrer || null
            })
        }).catch(() => { /* silent fail */ })
    }, [pathname])

    return null
}
