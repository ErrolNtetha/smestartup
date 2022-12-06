import React from 'react';
import { Search } from 'components/search';

export const Intro = () => {
    const [searchWord, setSearchWord] = React.useState('');

    return (
        <section className='faq__intro'>
            <section className='container'>
            <section className='faq__heading'>
                <h3 className='faq__h3'> Hello, we are here to help you! </h3>
                <p className='faq__paragraph'> Browse our Frequently Asked Questions below or search through a topic. </p>
            </section>
            <Search
              placeholder='Type a keyword to find answers...'
              searchKey={(e) => setSearchWord(e.target.value)}
              searchTerm={searchWord}
              clearSearchKey={() => setSearchWord('')}
              className='faq__search'
            >
                {searchWord
                    && <section style={{ padding: '.9em', marginTop: '1em', fontSize: '.8rem' }} className='faq__searchResultContainer'>No results found for that keyword.</section>}
            </Search>
            </section>
        </section>
    );
};
