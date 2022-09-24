import React from 'react';
import { Preview } from 'views/suppliers/preview';
import { useFetchData } from 'hoc/useFetchData';
import { useParams } from 'react-router-dom';
import { SupplierInfo } from './supplierInfo';

export const Details = () => {
    const { id } = useParams();
    const { data, loading } = useFetchData(`/suppliers/${id}`);
    return (
        <main>
            <section>
                <SupplierInfo about={loading ? 'loading' : data?.suppliers?.about} isRegistered photos={['one', 'two']} name={loading ? 'loading' : data?.suppliers?.name} />
            </section>
            <section style={{ width: '30%' }}>
                <Preview about={loading ? 'loading' : data?.suppliers?.about} established={2021} email='info@blendot.com' website='https://blendot.com' />
            </section>
        </main>
    );
};
