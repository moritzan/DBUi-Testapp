import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { TestSeite } from "./components/TestSeite";

import { Home } from "./components/Home";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/TestSeite',
        element: <TestSeite />
    }
];

export default AppRoutes;
