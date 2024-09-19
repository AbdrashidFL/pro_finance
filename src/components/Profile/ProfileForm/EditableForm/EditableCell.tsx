import { FC, PropsWithChildren, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Form, Input, InputNumber, InputRef } from 'antd';
import { EditableContext, ProductData } from '../ProfileForm.tsx';
interface EditableCellProps {
    title: ReactNode;
    editable: boolean;
    dataIndex: string;
    record: ProductData;
    handleSave: (record: ProductData) => void;
    context: any;
}
export const EditableCell: FC<PropsWithChildren<EditableCellProps>> = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<InputRef | any>(null);
    const form = useContext(EditableContext)!;

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({ [dataIndex]: record[dataIndex] });
    };

    const save = async () => {
        try {
            const values = await form.validateFields();

            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;
    const inputNumberFields = ['productsTransit', 'quantityProducts', 'size', 'availableOrder'];

    if (editable) {
        childNode = editing ? (
            <Form.Item
                name={dataIndex as any}
                rules={[{ required: true, message: `${title} is required.` }]}
                style={{
                    margin: 0,
                }}
            >
                {inputNumberFields.includes(dataIndex) ? (
                    <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} />
                ) : (
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                )}
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{ paddingInlineEnd: 24 }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        );
    }

    return <td {...restProps}>{childNode}</td>;
};
