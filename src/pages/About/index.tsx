import { TEAM_MEMBERS } from '@/data/constants';
import MyCard from '@/pages/About/MyCard';
import { Col, Row } from 'antd';

export default function About() {
  return (
    <Row gutter={[0, 40]} align="middle" style={{ padding: '40px 0' }}>
      {TEAM_MEMBERS.map((member) => (
        <Col xs={24} md={12} xl={6} key={member.name} style={{ padding: 20 }}>
          <MyCard
            imgUrl={member.imgUrl}
            roles={member.roles}
            github={member.github}
            name={member.name}
            comment={member.comment}
          />
        </Col>
      ))}
    </Row>
  );
}
