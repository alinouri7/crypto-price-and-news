import React from 'react';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import {  useGetCryptoExchangeQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;


const Exchanges = () => {
  const { data, isFetching } = useGetCryptoExchangeQuery();
  const exchangesList = data?.data?.exchanges;
 // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
      </Row>
      <Row style={{height: '96vh'}}>
        {exchangesList.map((exchange) => (
          <Col span={12}  >
            <Collapse>
              <Col
                key={exchange.uuid}
              >
                <Row >
                    <Col span={8}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                  </Row>
              </Col>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;