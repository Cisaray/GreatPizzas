import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={420}
        viewBox="0 0 280 420"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="120" cy="110" r="110" />
        <rect x="0" y="270" rx="10" ry="10" width="240" height="85" />
        <rect x="120" y="370" rx="30" ry="30" width="120" height="40" />
        <rect x="0" y="370" rx="10" ry="10" width="80" height="32" />
        <rect x="0" y="230" rx="0" ry="0" width="240" height="24" />
    </ContentLoader>
)

