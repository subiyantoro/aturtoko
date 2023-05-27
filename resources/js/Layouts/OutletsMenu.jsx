import { outlets } from "@/utils/menus"
import { Dropdown, Button } from "antd"
import { useState } from "react"
import { ShopOutlined } from '@ant-design/icons'

const OutletsMenu = () => {
    const [outlet, setOutlet] = useState(outlets[0].label);

    return (
        <Dropdown
            menu={{
                items: outlets,
                defaultSelectedKeys: [outlets[0].key],
                selectable: true,
                onClick: ({ key }) => setOutlet(outlets.find(x => x.key === key).label)
            }}
            trigger={['click']}
            arrow={{ pointAtCenter: true }}
            placement="bottom"
        >
            <Button type="primary" size="large" ghost icon={<ShopOutlined />}>{outlet}</Button>
        </Dropdown>
    )
}

export default OutletsMenu;
