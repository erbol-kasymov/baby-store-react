import React from "react";
import styled from "styled-components";
import {Form, Input, Modal} from 'antd';


const ModalBuy = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Wrapper>
            <Modal
                open={open}
                title="Заполните форму"
                okText="Далее"
                cancelText="Отмена"
                onCancel={onCancel}
                onOk={() => {
                    form.validateFields()

                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
                }}
                >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                    modifier: 'public',
                    }}
                >
                    <Form.Item
                    name="title"
                    label="Номер телефона"
                    rules={[
                        {
                        required: true,
                        message: 'Пожалуйста введите номер телефона!',
                        },
                    ]}
                    >
                    <Input defaultValue="+996" type="text" minLength="12" maxLength="13"/>
                    </Form.Item>
                    <Form.Item name="description" label="Введите эл.почту">
                    <Input type="e-mail" placeholder="example@gmail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    </Form.Item>
                </Form>
            </Modal>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    
`

export default ModalBuy;