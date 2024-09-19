import { Button, Col, Form, FormInstance, Input, InputRef, Row, Select, Table } from 'antd';
import {
    createContext,
    FC,
    PropsWithChildren,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { dataMock } from '../../../mocks/data.ts';
import { EditableCell } from './EditableForm/EditableCell.tsx';
import { EditableRow } from './EditableForm/EditableRow.tsx';
import {
    FileFilled,
    FileAddFilled,
    CloseOutlined,
    FolderOpenFilled,
    SlidersFilled,
} from '@ant-design/icons';
import './profileForm.scss';
import { ProfileFormFooter } from './ProfileFormFooter/ProfileFormFooter.tsx';
import { CSVLink } from 'react-csv';
import { ButtonAction, EButtonActionMode } from '../../ui/Button/ButtonAction.tsx';
export interface ProductData {
    barcode: number;
    type: string;
    sku: string;
    size: number;
    availableOrder: number;
    productsTransit: number;
    quantityProducts: number;
}
export interface EditableRowProps {
    index: number;
}
interface ColumnType {
    title: string;
    dataIndex: keyof ProductData;
    sorter?: (a: ProductData, b: ProductData) => number;
    editable?: boolean;
    onCell?: (record: ProductData) => void;
    width?: number;
}
export const EditableContext = createContext<FormInstance<any> | null>(null);

export const ProfileForm = () => {
    const [tableData, setTableData] = useState([]);
    const [category, setCategory] = useState<string>();

    const handlerCategory = (value: string) => {
        setCategory(value);
    };
    const onFinish = (values) => {
        values.category = category;

        const filtered = tableData.filter((item) => {
            return Object.keys(values).every((key) => {
                if (!values[key]) return true;
                return String(item[key]).toLowerCase().includes(String(values[key]).toLowerCase());
            });
        });
        setTableData(filtered);
    };
    const importFile = () => {
        setTableData(dataMock);
    };

    const defaultColumns: ColumnType[] = [
        {
            title: 'Barcode',
            dataIndex: 'barcode',
            sorter: (a, b) => a.barcode - b.barcode,
            width: 100,
        },
        {
            title: 'Type',
            dataIndex: 'type',
            sorter: (a, b) => a.type.localeCompare(b.type),
            editable: true,
            width: 150,
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            sorter: (a, b) => a.sku.localeCompare(b.sku),
            editable: true,
            width: 150,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            sorter: (a, b) => a.size - b.size,
            editable: true,
            width: 75,
        },
        {
            title: 'Available Order',
            dataIndex: 'availableOrder',
            sorter: (a, b) => a.availableOrder - b.availableOrder,
            editable: true,
            width: 75,
        },
        {
            title: 'Products Transit',
            dataIndex: 'productsTransit',
            sorter: (a, b) => a.productsTransit - b.productsTransit,
            editable: true,
            width: 100,
        },
        {
            title: 'Quantity Products',
            dataIndex: 'quantityProducts',
            sorter: (a, b) => a.quantityProducts - b.quantityProducts,
            editable: true,
            width: 100,
        },
    ];

    const handleSave = (row: ProductData) => {
        const newData = [...tableData];
        const index = newData.findIndex((item) => row.barcode === item.barcode);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setTableData(newData);
    };

    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };
    const columns: ColumnType[] = defaultColumns.map((col) => {
        if (!col?.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record: ProductData) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });
    return (
        <>
            <div className="profileForm">
                <div className="profileForm-wrap">
                    <div className="profileForm-item">
                        <div className="profileForm-item__title">
                            <h2>Остатки сформированы на 01.04.2023 г.</h2>
                            <a href="#">
                                <SlidersFilled />
                                <span>Инструменты</span>
                            </a>
                        </div>
                        <Form
                            wrapperCol={{ span: 23, offset: 0 }}
                            style={{ maxWidth: 'none' }}
                            onFinish={onFinish}
                            layout="inline"
                            className="profileForm-item__form"
                        >
                            <Form.Item name="barcode">
                                <div className="profileForm-item__label">
                                    <p>Баркод</p>
                                    <Input className="profileForm-item__label-input" width={100} />
                                </div>
                            </Form.Item>
                            <Form.Item name="sku">
                                <div className="profileForm-item__label">
                                    <p>Артикул</p>
                                    <Input className="profileForm-item__label-input" />
                                </div>
                            </Form.Item>
                            <Form.Item name="size">
                                <div className="profileForm-item__label">
                                    <p>Размер</p>
                                    <Input className="profileForm-item__label-input profileForm-item__label-size" />
                                </div>
                            </Form.Item>
                            <Form.Item name="category">
                                <div className="profileForm-item__category">
                                    <p>Категория</p>
                                    <Select onChange={handlerCategory}>
                                        {[...new Set(tableData.map((item) => item.type))].map(
                                            (type, index) => (
                                                <Select.Option value={type} key={index}>
                                                    {type}
                                                </Select.Option>
                                            ),
                                        )}
                                    </Select>
                                </div>
                            </Form.Item>
                            <div className="profileForm-item__btns">
                                <Form.Item>
                                    <ButtonAction
                                        mode={EButtonActionMode.SMALL}
                                        text="Сформировать"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <CSVLink
                                        data={tableData}
                                        style={{ width: '100%' }}
                                        className="profileForm-item__btns-export"
                                    >
                                        <FolderOpenFilled />
                                        <span>Экспорт</span>
                                    </CSVLink>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                    <div className="profileForm-footer">
                        <div className="profileForm-footer__data">
                            <button
                                className="profileForm-footer__data-btn"
                                onClick={() => importFile()}
                            >
                                <FileAddFilled />
                                <span>Загрузить данные из csv</span>
                            </button>
                            <button className="profileForm-footer__data-btn">
                                <FileFilled />
                                <span>Изменить данные</span>
                            </button>
                        </div>
                        <button
                            className="profileForm-footer__clear profileForm-footer__data-btn"
                            onClick={() => importFile()}
                        >
                            <span>Очистить</span>
                            <CloseOutlined />
                        </button>
                    </div>
                </div>
                <Table
                    components={components}
                    columns={columns as any}
                    dataSource={tableData}
                    footer={() => ProfileFormFooter(tableData)}
                    scroll={{ y: 500 }}
                    bordered={true}
                    pagination={false}
                />
            </div>
        </>
    );
};
