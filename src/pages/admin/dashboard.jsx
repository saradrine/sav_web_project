import {useState} from 'react';
import Header from '../../components/admin/header/header';
import ServiceUsage from "../../components/admin/charts/serviceUsage/serviceUsage.jsx";
import ServiceTypes from "../../components/admin/charts/serviceTypes/serviceTypes.jsx";
import VehicleTypes from "../../components/admin/charts/vehiculeTypes/vehicleTypes.jsx";




export default function Dashboard() {
    const data = {
        '2024': {
            'Vidange': [
                { month: 'Janvier', nombre: 400 },
                { month: 'Février', nombre: 300 },
                { month: 'Mars', nombre: 200 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Pneumatique': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Carrosserie': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Diagnostic': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Réparation': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Peinture': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Climatisation': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Electricité': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
        },
        '2023': {
            'Vidange': [
                { month: 'Janvier', nombre: 300 },
                { month: 'Février', nombre: 300 },
                { month: 'Mars', nombre: 200 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Pneumatique': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Carrosserie': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Diagnostic': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Réparation': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Peinture': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Climatisation': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ],
            'Electricité': [
                { month: 'Janvier', nombre: 240 },
                { month: 'Février', nombre: 456 },
                { month: 'Mars', nombre: 123 },
                { month: 'Avril', nombre: 278 },
                { month: 'Mai', nombre: 189 },
                { month: 'Juin', nombre: 239 },
                { month: 'Juillet', nombre: 349 },
                { month: 'Août', nombre: 200 },
                { month: 'Septembre', nombre: 278 },
                { month: 'Octobre', nombre: 189 },
                { month: 'Novembre', nombre: 239 },
                { month: 'Décembre', nombre: 349 }
            ]
        }
    };

    const services = Object.keys(data['2024']);
    const years = Object.keys(data);

    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start mb-6">
                <div className="w-full lg:w-2/3">
                    <ServiceUsage data={data} services={services} years={years}/>
                </div>
                <div className="w-full lg:w-1/3">
                    <ServiceTypes data={data} years={years} services={services}/>
                </div>
            </div>
            <VehicleTypes/>

        </div>
    );
}
