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
            { errorMessage
                    ? 'There was an Error'
                    : loading
                    ? <SkeletonLoading cards={1} numCount={12} />
                    : (
                        <section className='container'>
                            <section className='supplier__mainContent'>
                                <section className='supplier__left'>
                                    <Container header='Overview' className='supplier__mapPreview'>
                                        <Overview
                                          isRegistered={suppliers?.isregistered}
                                          established={suppliers?.established}
                                          companyType={suppliers?.type}
                                          beeLevel={suppliers?.beeLevel}
                                          moqNumber={suppliers?.moqNumber}
                                          quotation={suppliers?.quotation}
                                          about={suppliers?.about}
                                          descriptionClass='supplier__descriptionHeader'
                                        />
                                    </Container>
                                    <Container header={`Photos (${suppliers?.photos?.length})`} className='supplier__reviews'>
                                        <Photos photos={suppliers?.photos} />
                                    </Container>
                                    <Container header='Reviews' className='supplier__reviews'>
                                        <Reviews />
                                    </Container>
                                </section>
                                <SupplierInfo
                                  sector={suppliers?.sector}
                                  companyType={suppliers?.type}
                                  established={suppliers?.established}
                                  isregistered={suppliers?.isregistered}
                                  photos={suppliers?.photos}
                                  name={suppliers?.name}
                                  createdAt={suppliers?.createdAt}
                                  description={suppliers?.description}
                                  avatar={suppliers?.avatar}
                                  beeLevel={suppliers?.beeLevel}
                                  moqNumber={suppliers?.moqNumber}
                                  quotation={suppliers?.quotation}
                                  isOwner={data?.isOwner}
                                />
                                <section className='supplier__right'>
                                    <Container header='Map' className='supplier__mapPreview'>
                                        <Map
                                          latitude={suppliers.addresses.coordinates[1]}
                                          longitude={suppliers.addresses.coordinates[0]}
                                          address={suppliers.addresses.formattedAddress}
                                        />
                                    </Container>
                                </section>
                            </section>
                        </section>
                    )}
        </>
    );
};
