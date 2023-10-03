import PageTabs from "../Components/PageTabs/PageTabs";
import { useState } from "react";
import { addCountry } from "../features/countries";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Countries = () => {
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
export default Countries;