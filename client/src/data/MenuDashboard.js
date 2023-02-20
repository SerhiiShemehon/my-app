import { ReactComponent as Dashboard } from '../assets/icons/dashboard.svg';
import { ReactComponent as Posts } from '../assets/icons/posts.svg';
import { ReactComponent as Tasks } from '../assets/icons/tasks.svg';
import { ReactComponent as Settings } from '../assets/icons/gear-solid.svg';
import { ReactComponent as Chat } from '../assets/icons/comments-solid.svg';

const MENU_DASHBOARD = [
    {
        id: 1,
        title: 'Dashboard',
        link: '/dashboard',
        icon: Dashboard,
    },
    {
        id: 2,
        title: 'Chat',
        link: '/messages',
        icon: Chat,
    },
    {
        id: 3,
        title: 'Posts',
        link: '/posts',
        icon: Posts,
    },
    {
        id: 4,
        title: 'Tasks',
        link: '/tasks',
        icon: Tasks,
    },
    {
        id: 5,
        title: 'Settings',
        link: '/settings',
        icon: Settings,
    },
];

export default MENU_DASHBOARD;
