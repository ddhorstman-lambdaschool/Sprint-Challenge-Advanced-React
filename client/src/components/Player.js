import React, { useState } from "react";
import {Card, CardText, CardHeader, CardTitle, CardBody} from "reactstrap";
import useCountryFlag from "../hooks/useCountryFlag";
export default function Player(props){
    const [flagURL, setFlag] = useCountryFlag(props.country);
    return (
        <Card style={{margin: "5px 0px"}}>
            <CardHeader>
                <CardTitle>{props.name}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardText>Country:<img src={flagURL}/></CardText>
            </CardBody>
        </Card>
    );
};