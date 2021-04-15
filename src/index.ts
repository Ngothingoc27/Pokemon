import Play from './pages/play';
import Signin from './pages/signin';
import { parseRequestUrl } from './utils';

const routes = {
    '/': Signin,
    '/play' : Play
}

const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + 
    ( id ? `/:id` : '')

    const page = routes[parseUrl] ? routes[parseUrl] : 'Error Page';
    document.querySelector('.main-content').innerHTML = await page.render();
    await page.afterRender();
    
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);