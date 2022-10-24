/* eslint-disable no-nested-ternary */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import { FiArrowLeft } from 'react-icons/fi';
import og from 'assets/og.png';
import { Details } from './details';

export const SupplierView = () => {
    const { id } = useParams();
    const { data, errorMessage, loading } = useFetchData(`/suppliers/${id}`);
    const { suppliers } = data;

    return (
        <>
            <Helmet>
                <title> { loading ? 'Loading' : `${suppliers?.name}`} | Blendot </title>
                <meta property='og:title' content={`${suppliers?.name} | Bledot`} />
                <meta property='og:image' content={og} />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='630' />
                <meta property='og:type' content='article' />
                <meta property='og:url' content={`https://blendot.com/suppliers/${id}`} />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='og:description' content={suppliers?.description} />
                <meta property='og:site_name' content='Blendot' />
            </Helmet>
            <Header>
                <FiArrowLeft className='supplier__arrowLeft' />
            </Header>
            {loading
                ? 'loading'
                : errorMessage
                ? 'There was an error'
                : <Details name={suppliers?.name} about={suppliers?.about} />}
        </>
    );
};
