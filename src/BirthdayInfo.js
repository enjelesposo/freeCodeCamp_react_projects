import React from 'react';

const BirthdayInfo = ({img, name, age}) => {
    return(
        <section>
            <img className='img' src={img} alt="" />
            <div className="info">
                <h4 className='name'>{name}</h4>
                <p className='age'>{age} yrs old</p>
            </div>
        </section>
    );
};

export default BirthdayInfo;