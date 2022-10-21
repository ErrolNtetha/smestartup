import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import { FiArrowLeft } from 'react-icons/fi';
import og from 'assets/og.png';
import { Details } from './details';

export const SupplierView = () => {
    const { id } = useParams();
    const { data, loading } = useFetchData(`/suppliers/${id}`);
    const { suppliers } = data;
    const history = useHistory();

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
                <FiArrowLeft className='supplier__arrowLeft' onClick={() => history.push('/suppliers')} />
            </Header>
            <Details name={suppliers?.name} about={suppliers?.about} />
        </>
    );
};
