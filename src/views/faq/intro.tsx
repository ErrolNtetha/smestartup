import React from 'react';
import { Search } from 'components/search';

export const Intro = () => {
    const [searchWord, setSearchWord] = React.useState('');

    console.log(searchWord);

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
                    && <section className='faq__searchResultContainer'> These are search result </section>}
            </Search>
            </section>
        </section>
    );
};
