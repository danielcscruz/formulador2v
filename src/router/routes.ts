import DefaultLayout from '@/layouts/Default.vue'
import ProfileLayout from '@/layouts/Profile.vue'
import Auth from '@/layouts/Auth.vue'

export const routes = [
    {
        path: '/',
        name: 'Home-1',
        component: () => import('@/views/job/home/home-1/index.vue'),
        meta: {
            title: 'Job Board | Home v.1',
            layout: DefaultLayout
        }
    },
    {
        path: '/job-board-home-v2',
        name: 'Home-2',
        component: () => import('@/views/job/home/home-2/index.vue'),
        meta: {
            title: 'Job Board | Home v.2',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-catalog',
        name: 'Catalog ( List Job )',
        component: () => import('@/views/job/catalog/list_job/index.vue'),
        meta: {
            title: 'Job Board | Catalog (List of Jobs)',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-single',
        name: 'Catalog ( Single Job Page )',
        component: () => import('@/views/job/catalog/single_page/index.vue'),
        meta: {
            title: 'Job Board | Single Job Page',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-account-profile',
        name: 'Account - Profile Settings',
        component: () => import('@/views/job/account/accountpages/profile/index.vue'),
        meta: {
            title: 'Job Board | Account - Profile Settings',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-account-my-resumes',
        name: 'Account - My Resumes',
        component: () => import('@/views/job/account/accountpages/resume/index.vue'),
        meta: {
            title: 'Job Board | Account - My Resumes',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-account-saved-jobs',
        name: 'Seved Job',
        component: () => import('@/views/job/account/accountpages/seved-job/index.vue'),
        meta: {
            title: 'Job Board | Account - Seved Job',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-account-notifications',
        name: 'Notifications',
        component: () => import('@/views/job/account/accountpages/notification/index.vue'),
        meta: {
            title: 'Job Board | Account - Notifications',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-post-resume-1',
        name: 'Post Resume - Basic Info',
        component: () => import('@/views/job/account/post-resume/basic-info/index.vue'),
        meta: {
            title: 'Job Board | Post Resume - Basic Info',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-post-resume-2',
        name: 'Post Resume - Education',
        component: () => import('@/views/job/account/post-resume/education/index.vue'),
        meta: {
            title: 'Job Board | Post Resume - Education',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-post-resume-3',
        name: 'Post Resume - Work Experience',
        component: () => import('@/views/job/account/post-resume/work-experience/index.vue'),
        meta: {
            title: 'Job Board | Post Resume - Work Experience',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-post-resume-4',
        name: 'Post Resume - Skills',
        component: () => import('@/views/job/account/post-resume/skills/index.vue'),
        meta: {
            title: 'Job Board | Post Resume - Skills',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-post-resume-5',
        name: 'Post Resume - Review',
        component: () => import('@/views/job/account/post-resume/review/index.vue'),
        meta: {
            title: 'Job Board | Post Resume - Review',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-promotion',
        name: 'Ad Promotion Page',
        component: () => import('@/views/job/account/ad-pramotion/index.vue'),
        meta: {
            title: 'Job Board | Ad Promotion Page',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-employer-single',
        name: 'Employer / Company Page',
        component: () => import('@/views/job/account/employer/index.vue'),
        meta: {
            title: 'Job Board | Employer / Company Page',
            layout: ProfileLayout

        }
    },
    {
        path: '/job-board-about',
        name: 'About Page',
        component: () => import('@/views/job/pages/about/index.vue'),
        meta: {
            title: 'Job Board | About Page',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-blog',
        name: 'Blog',
        component: () => import('@/views/job/pages/blog/blog-grid/index.vue'),
        meta: {
            title: 'Job Board | Blog',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-blog-single',
        name: 'Single Post',
        component: () => import('@/views/job/pages/blog/single-post/index.vue'),
        meta: {
            title: 'Job Board | Single Post',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-contacts',
        name: 'Contacts',
        component: () => import('@/views/job/pages/contact/index.vue'),
        meta: {
            title: 'Job Board | Contacts',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-help-center',
        name: 'Help Center',
        component: () => import('@/views/job/pages/helpcenter/help-topic/index.vue'),
        meta: {
            title: 'Job Board | Help Center',
            layout: DefaultLayout

        }
    },
    {
        path: '/job-board-help-center-single-topic',
        name: 'Help Center - Single Topic',
        component: () => import('@/views/job/pages/helpcenter/single-topic/index.vue'),
        meta: {
            title: 'Job Board | Help Center - Single Topic',
            layout: DefaultLayout
            
        }
    },
    {
        path: '/signin-light',
        name: 'Sign In Page',
        component: () => import('@/views/job/account/signin-light/index.vue'),
        meta: {
            title: 'Job Board | Sign In Page',
            layout: Auth
        }
    },
    {
        path: '/signup-light',
        name: 'Sign Up Page',
        component: () => import('@/views/job/account/signup-light/index.vue'),
        meta: {
            title: 'Job Board | Sign Up Page',
            layout: Auth
        }
    },
    {
        path: '/job-board-404',
        name: 'job 404',
        component: () => import('@/views/job/pages/404/index.vue'),
        meta: {
            title: 'Job Board | 404 ',
            layout: Auth
        }
    },
]
