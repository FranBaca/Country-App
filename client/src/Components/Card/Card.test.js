import React from 'react';
import { render } from '@testing-library/react'
import { expect } from '@jest/globals';
import {Card} from '../Card/Card';

describe('Pruebas en la modal de ', () => {
    let c = {name: "Argentina",flag:"url", continent: "Americas"}
    test('Debe de mostrar Argentina en la lista de paises.', () => {
        let { getByText } = render(<Card c={c} />)
        expect(getByText('Argentina')).toBeInTheDocument();
    })

    let d={name:"Alemania",flag:"url",continent:"Europe"}
    test('Debe llegarle continente Europe',()=>{
         let dos = render(<Card c={d} />)
        expect(dos.getByText('Europe')).toBeInTheDocument();
    })

    test('No debe llegarle un name vacio',()=>{
        let dos = render(<Card c={d} />)
       expect(dos.queryByText('HOMEROJSIMPSON')).not.toBeInTheDocument();
   })



   
})

