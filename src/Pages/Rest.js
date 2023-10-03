/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import PageTabs from "../Components/PageTabs/PageTabs";
import { useSelector, useDispatch } from "react-redux";
import { addCountry } from "../features/countries";
import axios from "axios";

const Rest = () => {
    const [cName, setCName] = useState('');
    const [cPopulation, setCPopulation] = useState(0);
    const countries = useSelector((state) => state.countries.value);
    const dispatch = useDispatch();

    const addNewCountry = () => {
        dispatch(addCountry({
            name: cName,
            population: cPopulation
        }))
    }
    const countriesLabel = [];
    const countriesData = [];
    if(countries.length > 0) {
        countries.forEach((country) => {
            countriesLabel.push(country.name);
            countriesData.push(country.population);
        })
    }

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then((res) => {
            if(res.data.length > 0) {
                // Bubble sort
                for(let i = 0; i < res.data.length - 1; i++) {
                    for(let j = i + 1; j < res.data.length; j++) {
                        if(res.data[i].population < res.data[j].population) {
                            let aux = res.data[i];
                            res.data[i] = res.data[j];
                            res.data[j] = aux;
                        }
                    }
                }
                // End bubble sort
                res.data.forEach((country, index) => {
                    if(index < 6) {
                        countriesLabel.push(country.name.common);
                        countriesData.push(country.population);
                    }
                })
            }
        })
    },[])

    const chartData = {
        labels: countriesLabel,
        data: countriesData
    }

    const formData = [
        {label:'Country name', setter: setCName},
        {label:'Country population', setter:setCPopulation}
    ]

    return (
        <PageTabs
        formData={formData}
        formAction={addNewCountry}
        chartData={chartData}
        />
    )
}

export default Rest;