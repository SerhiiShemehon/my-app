import { ReactComponent as Dashboard } from 'assets/icons/dashboard.svg'
import { ReactComponent as Posts } from 'assets/icons/posts.svg'
import { ReactComponent as Tasks } from 'assets/icons/tasks.svg'

const MENU_DASHBOARD = [
  {
    id: 1,
    title: 'Dashboard',
    link: '/dashboard',
    icon: Dashboard
  },
  {
    id: 2,
    title: 'Posts',
    link: '/posts',
    icon: Posts
  },
  {
    id: 3,
    title: 'Tasks',
    link: '/tasks',
    icon: Tasks
  }
]

export default MENU_DASHBOARD;