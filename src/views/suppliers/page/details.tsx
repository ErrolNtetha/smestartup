import React from 'react';
// import { Preview } from 'views/suppliers/preview';
import { useFetchData } from 'hoc/useFetchData';
import { useParams } from 'react-router-dom';
// import { Loading } from 'components/loading';
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
                          sector={data?.suppliers?.sector}
                          companyType={data?.suppliers?.companyType}
                          established={data?.suppliers?.established}
                          isRegistered={data?.suppliers?.isRegistered}
                          photos={data?.suppliers?.photos}
                          name={data?.suppliers?.name}
                          createdAt={data?.suppliers?.createdAt}
                          description={data?.suppliers?.description}
                          avatar={data?.suppliers?.avatar}
                          beeLevel={data?.suppliers?.beeLevel}
                          moqNumber={data?.suppliers?.moqNumber}
                          quotation={data?.suppliers?.quotation}
                        />
                    )}
            </section>
        </main>
    );
};
