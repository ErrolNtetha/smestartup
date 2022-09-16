import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
    title: string;
    ogTitle: string;
    ogType: string;
    ogUrl: string;
    ogDescription: string;
    ogSiteName: string;
}

export const HelmetTags = ({
    title,
    ogTitle,
    ogType,
    ogUrl,
    ogDescription,
    ogSiteName
}: Props) => {
    return (
        <Helmet>
            <title> {title} </title>
            <meta property='og:title' content={ogTitle} />
            <meta property='og:type' content={ogType} />
            <meta property='og:url' content={ogUrl} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta property='og:description' content={ogDescription} />
            <meta property='og:site_name' content={ogSiteName} />
        </Helmet>
    );
};
