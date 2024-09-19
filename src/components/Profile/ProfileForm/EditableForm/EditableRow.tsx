import { FC } from 'react';
import { Form } from 'antd';
import { EditableRowProps, EditableContext } from '../ProfileForm.tsx';
export const EditableRow: FC<EditableRowProps> = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};
