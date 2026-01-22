import ItemCardSkeleton from '@/components/skeletons/ItemCardSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {[...Array(12)].map((_, index) => <ItemCardSkeleton key={index}></ItemCardSkeleton>)} 
            {/* creating 12 empty array; '_' for empty element; */}
        </div>
    );
};

export default loading;