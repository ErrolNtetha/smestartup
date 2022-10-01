import React from 'react';
import { Preview } from 'views/suppliers/preview';
import { useFetchData } from 'hoc/useFetchData';
import { useParams } from 'react-router-dom';
import { Loading } from 'components/loading';
import { SupplierInfo } from './supplierInfo';
import { SkeletonLoading } from '../skeletonLoading';

export const Details = () => {
    const { id } = useParams();
    const { data, loading } = useFetchData(`/suppliers/${id}`);

    return (
        <main>
            <section>
                { loading
                    ? <SkeletonLoading cards={1} numCount={12} />
                    : (
                        <SupplierInfo
                          author={data?.suppliers?.author}
                          category={data?.suppliers?.type}
                          companyType={data?.suppliers?.companyType}
                          established={data?.suppliers?.established}
                          about={data?.suppliers?.about}
                          isRegistered={data?.suppliers?.isRegistered}
                          photos={data?.suppliers?.photos}
                          name={data?.suppliers?.name}
                          createdAt={data?.suppliers?.createdAt}
                          description={data?.suppliers?.description}
                          avatar={data?.suppliers?.avatar}
                        />
                    )}
            </section>
            <section style={{ width: '30%' }}>
                <Preview about={loading ? <Loading className='supplier__previewLoading' content='article' /> : data?.suppliers?.about} established={2021} email='info@blendot.com' website='https://blendot.com' />
            </section>
        </main>
    );
};
