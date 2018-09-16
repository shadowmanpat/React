import React, { Component } from 'react';


const  Ninjas = ({ninjas}) =>{



        const ninjaList = ninjas.map(ninja => {
            // if(ninja.age>23) {
            //     return  (
            //
            //         <div className="ninja" key={ninja.id}>
            //             <div>Name : {ninja.name}</div>
            //             <div>Age : {ninja.age}</div>
            //         </div>
            //     )
            // } else {
            //         return null
            // }

            return ninja.age > 23 ? ( <div className="ninja" key={ninja.id}>
                <div>Name : {ninja.name}</div>
                <div>Age : {ninja.age}</div>
            </div>) : (null);

        });
        return (


            <div className="ninja-list">
                {ninjaList}
            </div>

        );

}

export default Ninjas;
