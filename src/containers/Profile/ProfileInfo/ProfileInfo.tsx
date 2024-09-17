import { Layout } from 'antd';
import { ProfileSettings } from '../../../components/Profile/ProfileSettings/ProfileSettings.tsx';
import { ProfileFeedback } from '../../../components/Profile/ProfileFeedback/ProfileFeedback.tsx';
import './profileInfo.scss';
import { ButtonAction, EButtonActionMode } from '../../../components/ui/Button/ButtonAction.tsx';
import { MessageFilled } from '@ant-design/icons';

export const ProfileInfo = () => {
    return (
        <Layout className="profileInfo">
            <ProfileSettings />
            <ProfileFeedback />
            <ButtonAction mode={EButtonActionMode.BIG} text="Связаться с нами">
                <MessageFilled />
            </ButtonAction>
        </Layout>
    );
};
