/* eslint-disable no-nested-ternary */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory, useParams } from 'react-router-dom';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from 'components/container';
import og from 'assets/og.png';
import { SupplierInfo } from './supplierInfo';
import { SkeletonLoading } from '../skeletonLoading';
import { Photos } from './photos';
import { Map } from '../map';
import { Reviews } from './reviews';
import { Overview } from './overview';

export const SupplierView = () => {
    const { id } = useParams();
    const { data, errorMessage, loading } = useFetchData(`/suppliers/${id}`);
    const { suppliers } = data;
    const history = useHistory();

    return (
        <>
            <Helmet>
                <title> { loading ? 'Loading' : `${suppliers?.name}`} | Blendot </title>
                <meta name='description' content={suppliers?.about} />
                <link rel='canonical' href={`/suppliers/${id}`} />
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
            { loading
                    ? <SkeletonLoading cards={1} numCount={12} />
                    : errorMessage
                    ? 'There was an error'
                    : (
                        <section className='container'>
                            <section className='supplier__mainContent'>
                                <section className='supplier__left'>
                                    <Container header='Overview' className='supplier__mapPreview'>
                                        <Overview
                                          isRegistered={data?.suppliers?.isregistered}
                                          established={data?.suppliers?.established}
                                          companyType={data?.suppliers?.type}
                                          beeLevel={data?.suppliers?.beeLevel}
                                          moqNumber={data?.suppliers?.moqNumber}
                                          quotation={data?.suppliers?.quotation}
                                          about={data?.suppliers?.about}
                                          descriptionClass='supplier__descriptionHeader'
                                        />
                                    </Container>
                                    <Container header={`Photos (${suppliers?.photos?.length})`} className='supplier__reviews'>
                                        <Photos photos={data.suppliers.photos} />
                                    </Container>
                                    <Container header='Reviews' className='supplier__reviews'>
                                        <Reviews />
                                    </Container>
                                </section>
                                <SupplierInfo
                                  sector={data?.suppliers?.sector}
                                  companyType={data?.suppliers?.type}
                                  established={data?.suppliers?.established}
                                  isregistered={data?.suppliers?.isregistered}
                                  photos={data?.suppliers?.photos}
                                  name={data?.suppliers?.name}
                                  createdAt={data?.suppliers?.createdAt}
                                  description={data?.suppliers?.description}
                                  avatar={data?.suppliers?.avatar}
                                  beeLevel={data?.suppliers?.beeLevel}
                                  moqNumber={data?.suppliers?.moqNumber}
                                  quotation={data?.suppliers?.quotation}
                                  isOwner={data?.isOwner}
                                />
                                <section className='supplier__right'>
                                    <Container header='Map' className='supplier__mapPreview'>
                                        <Map />
                                    </Container>
                                </section>
                            </section>
                        </section>
                    )}
        </>
    );
};
