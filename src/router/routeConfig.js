import Home from "../pages/home/Home";
import QNA from "../pages/qna/QNA";

/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
export default [
    {
        path: `/`,
        component: Home,
        name: 'HOME',
        exact: true,
    },
    {
        path: `/quiz/:id`,
        component: QNA,
        name: 'QNA',
        exact: true
    },
];

