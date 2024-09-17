import { Col, Layout, Row } from 'antd';
import { ProfileInfo } from './ProfileInfo/ProfileInfo.tsx';

export const Profile = () => {
    return (
        <Layout className="profile">
            <div className="container">
                <Row>
                    <Col className="gutter-row" span={6}>
                        <ProfileInfo />
                    </Col>
                    <Col className="gutter-row" span={15} offset={1}>
                        <div>col-6</div>
                    </Col>
                </Row>
            </div>
        </Layout>
    );
};
