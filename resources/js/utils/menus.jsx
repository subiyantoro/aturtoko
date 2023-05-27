import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from '@inertiajs/inertia-react';

export const sidebar = [
    {
        key: 'dashboard',
        icon: <UserOutlined />,
        label: <Link href={window.route('dashboard')}>
            Dashboard
        </Link>,
    },
    {
        key: 'products',
        icon: <ShoppingCartOutlined />,
        label: <Link href={window.route('dashboard')}>
            Products
        </Link>,
        children: [
            {
                key: 'category',
                label: <Link href={window.route('dashboard')}>
                    Category
                </Link>,
                key: 'product',
                label: <Link href={window.route('dashboard')}>
                    Products
                </Link>
            }
        ]
    },
    {
        key: 'users',
        icon: <UserOutlined />,
        label: <Link href={window.route('users')}>
            Users
        </Link>
    }
];

export const outlets = [
    {
        key: 'outlet1',
        label: 'Outlet 1'
    },
    {
        key: 'outlet2',
        label: 'Outlet 2',
    }
];
