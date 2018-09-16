import React, { Component } from 'react';
import './Ninjas.css'

const  Ninjas = ({ninjas,deleteNinja}) =>{



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
                <div>Id : {ninja.id}</div>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
            </div>) : (null);

        });
        return (


            <div className="ninja-list">
                {ninjaList}
            </div>

        );

}

export default Ninjas;
