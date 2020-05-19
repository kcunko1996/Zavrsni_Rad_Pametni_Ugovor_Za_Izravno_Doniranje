import React, {useEffect, useState} from "react";
import ProjektDonacija from "../PametniUgovori/ProjektDonacija";
import RitehDonacija from "../PametniUgovori/RitehDonacija";
import web3 from "./../PametniUgovori/web3";
import Router from 'next/router';
import {useForm,  Controller} from "react-hook-form";
import Input from "@material-ui/core/Input";

const NoviProjekt = () => {

    useEffect( () => {
        async function data() {
            await web3.eth.getAccounts().then(res => setAccount(res));
            await ProjektDonacija.methods.VratiSveProjekte().call().then(res => {
                res.forEach(contract => {
                    RitehDonacija(contract).methods.OpisProjekta().call().then(res => {
                        setProjekti(projekti => [...projekti, {
                            Naziv: res.naziv,
                            Opis: res.opis,
                            PrikupljeniIznos: res.prikupljeniNovac,
                            IznosPrikupljanja: res.iznosPrikupljanja
                        }]);
                    });
                })
            });
        }
        data();
    },[]);

    const PokreniProjekt = ({NaslovProjekta, OpisProjekta, IznosDonacije}) => {
        console.log(parseInt(IznosDonacije))
        const ethValue = 5;
        ProjektDonacija.methods.PokreniProjekt(
            NaslovProjekta,
            OpisProjekta,
            parseInt(IznosDonacije)
        ).send({
            from: account[0]
        })
            .then(res => Router.push(`/pametni-ugovor/${res.events.EventProjektPokrenut.returnValues.AdresaUgovora}`, `/pametni-ugovor/${res.events.EventProjektPokrenut.returnValues.AdresaUgovora}`, { shallow: true }))
    };
    const {control, handleSubmit, errors, register } = useForm();
    const onSubmit = data => PokreniProjekt(data);
    console.log(errors);

    const [account, setAccount] = useState(null);
    const [projekti, setProjekti] = useState([]);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller as={<Input />}  control={control} type="text" placeholder="Naslov Projekta" name="NaslovProjekta" rules={{required: true, maxLength: 80}}  />
            {errors.NaslovProjekta && 'Naslov Projekta je obavezan'}
            <Controller as={<Input />}  control={control} type="text" placeholder="Opis Projekta" name="OpisProjekta" rules={{required: true, maxLength: 1000}}  />
            {errors.OpisProjekta && 'Opis Projekta je obavezan'}
            <Controller as={<Input />}  control={control} type="number" placeholder="Iznos Donacije" name="IznosDonacije"  step="0.01" rules={{required: true, min: 0.01}}  />
            {errors.IznosDonacije && errors.IznosDonacije.type === 'min' &&  'Minimalna vrijednost donacije je 0.01 eth'}
            <input type="submit" />
        </form>

    );
};

export default NoviProjekt;


