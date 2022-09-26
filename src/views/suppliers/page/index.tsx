import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import { FiArrowLeft } from 'react-icons/fi';
import { Details } from './details';

export const SupplierView = () => {
    const { id } = useParams();
    const { data, loading } = useFetchData(`/suppliers/${id}`);
    const { suppliers } = data;
    console.log('supplier data: ', data);

    return (
        <>
            <Helmet>
                <title> { loading ? 'Loading' : `${suppliers?.name}`} | Blendot </title>
                <meta property='og:title' content={`${suppliers?.name} | Bledot`} />
                <meta property='og:type' content='article' />
                <meta property='og:url' content={`https://blendot.com/suppliers/${id}`} />
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='og:description' content='Finding suppliers for your business has never been easy. Search thousands of suppliers by location and settle your deals.' />
                <meta property='og:site_name' content='Blendot' />
            </Helmet>
            <Header>
                <FiArrowLeft className='supplier__arrowLeft' />
            </Header>
            <Details name={suppliers?.name} about={suppliers?.about} />
        </>
    );
};
