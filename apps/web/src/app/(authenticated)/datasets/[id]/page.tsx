'use client'

import React, { useEffect, useState } from 'react';
import { Typography, Row, Col, Card, Statistic, Space } from 'antd';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
const { Title, Text, Paragraph } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DatasetDetailsPage() {
  const params = useParams<any>();
  const datasetId = params.id;
  const { enqueueSnackbar } = useSnackbar();
  const [dataset, setDataset] = useState<any>(null);
  const [areas, setAreas] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datasetFound = await Api.Dataset.findOne(datasetId, { includes: ['user', 'areas', 'areas.emissions'] });
        setDataset(datasetFound);
        setAreas(datasetFound.areas || []);
      } catch (error) {
        enqueueSnackbar('Failed to fetch dataset details', { variant: 'error' });
      }
    };
    fetchData();
  }, [datasetId]);

  return (
    <PageLayout layout="full-width">
      <Title level={2}>Dataset Details</Title>
      <Paragraph>
        This page provides detailed information about the dataset, including its description, associated areas, and CO2 emissions data.
      </Paragraph>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Card bordered={false}>
            <Title level={4}>{dataset?.name}</Title>
            <Paragraph>{dataset?.description}</Paragraph>
            <Space>
              <Text><CalendarOutlined /> Created: {dayjs(dataset?.dateCreated).format('DD/MM/YYYY')}</Text>
              <Text><EnvironmentOutlined /> Areas: {areas.length}</Text>
            </Space>
          </Card>
        </Col>
        {areas.map((area) => (
          <Col xs={24} sm={12} lg={8} key={area.id}>
            <Card title={area.name} bordered={false}>
              {area.emissions?.map((emission) => (
                <Statistic
                  key={emission.id}
                  title={`Year: ${emission.year}`}
                  value={emission.co2Amount}
                  suffix="kg CO2"
                  style={{ marginBottom: 16 }}
                />
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}