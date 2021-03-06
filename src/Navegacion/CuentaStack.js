import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ConfirmarNumero from "../Pantallas/Cuenta/ConfirmarNumero";
import EnviarConfirmacion from "../Pantallas/Cuenta/EnviarConfirmacion";


const Stack = createStackNavigator();

export default function CuentaStack()
 {
    return (
        <Stack.Navigator>
            <Stack.Screen
                    component={EnviarConfirmacion}
                    name="enviar-confirmacion"
                    options={{
                    title: "Confirma Tu Numero de Telefono",
                    headerStyle: {backgroundColor: "#128C7E" },
                    headerTintColor: "#fff",
                }}
            />


            <Stack.Screen
                    component={ConfirmarNumero}
                    name="confirmar-movil"
                    options={{
                    title: "Confirma Numero",
                    headerStyle: { backgroundColor: "#128C7E" },
                    headerTintColor: "#fff",
                }}
            />
        </Stack.Navigator>
    );

}