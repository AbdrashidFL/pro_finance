import { Table } from 'antd';

export const ProfileFormFooter = (data) => {
    const totalProductsTransit = data.reduce((sum, item) => sum + item.productsTransit, 0);
    const totalQuantityProducts = data.reduce((sum, item) => sum + item.quantityProducts, 0);

    const footerColumns = [
        {
            title: 'Итого',
            dataIndex: 'result',
        },
        {
            title: 'Products Transit',
            dataIndex: 'productsTransit',
            width: 128,
        },
        {
            title: 'Quantity Products',
            dataIndex: 'quantityProducts',
            width: 128,
        },
    ];

    const dataSource = [
        {
            result: 'Итого',
            productsTransit: totalProductsTransit,
            quantityProducts: totalQuantityProducts,
        },
    ];

    return (
        <>
            <Table
                columns={footerColumns}
                dataSource={dataSource}
                bordered={true}
                pagination={false}
                showHeader={false}
            />
        </>
    );
};
