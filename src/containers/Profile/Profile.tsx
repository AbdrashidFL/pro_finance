import { Col, Layout, Row } from 'antd';
import { ProfileConfigure } from './ProfileConfigure/ProfileConfigure.tsx';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.tsx';

export const Profile = () => {
    return (
        <Layout className="profile">
            <div className="container">
                <Row>
                    <Col className="gutter-row" span={6}>
                        <ProfileConfigure />
                    </Col>
                    <Col className="gutter-row" span={15} offset={1}>
                        <ProfileInfo />
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};
