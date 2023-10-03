import PageTabs from "../Components/PageTabs/PageTabs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../features/fruits";

const Fruits = () => {
    const [fName, setFName] = useState("");
    const [fCalories, setFCalories] = useState(0);
    const dispatch = useDispatch();
    const fruits = useSelector((state) => state.fruits.value)

    const fruitsLabel = [];
    const fruitsData = [];
    if(fruits.length > 0) {
        fruits.forEach((fruit) => {
            fruitsLabel.push(fruit.name);
            fruitsData.push(fruit.calories);
        })
    }

    const addNewFruit = () => {
        dispatch(addFruit({
            name: fName,
            calories: fCalories
        }))
    }

    const formData = [
        {label:'Fruit name', setter: setFName},
        {label:'Fruit calories', setter:setFCalories}
    ]

    const chartData = {
        labels: fruitsLabel,
        data: fruitsData
    }

    return (
        <>
            <PageTabs
                formData={formData}
                formAction={addNewFruit}
                chartData={chartData}
            />
        </>
    )
}

export default Fruits;