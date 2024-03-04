'use client'

import React, { useEffect, useState } from 'react';
import { Button, Form, InputNumber, Select, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
const { Option } = Select;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AddEmissionDataPage() {
  const router = useRouter();
  const params = useParams<any>();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;
  const { enqueueSnackbar } = useSnackbar();
  const [datasets, setDatasets] = useState([]);
  const [areas, setAreas] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    if (userId) {
      Api.Dataset.findManyByUserId(userId, { includes: ['areas'] })
        .then(setDatasets)
        .catch(() => enqueueSnackbar('Failed to fetch datasets', { variant: 'error' }));
    }
  }, [userId]);

  const handleDatasetChange = (value) => {
    const selectedDataset = datasets.find(dataset => dataset.id === value);
    setAreas(selectedDataset?.areas || []);
  };

  const onFinish = async (values) => {
    try {
      await Api.Emission.createOneByAreaId(values.areaId, {
        co2Amount: values.co2Amount,
        year: values.year,
      });
      enqueueSnackbar('Emission data added successfully', { variant: 'success' });
      router.push(`/areas/${values.areaId}`);
    } catch (error) {
      enqueueSnackbar('Failed to add emission data', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title level={2}>Add CO2 Emission Data</Title>
        <Text>Add CO2 emission data for specific areas within a dataset.</Text>
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ marginTop: '20px' }}>
          <Form.Item name="datasetId" label="Dataset" rules={[{ required: true, message: 'Please select a dataset!' }]}>
            <Select placeholder="Select a dataset" onChange={handleDatasetChange}>
              {datasets.map(dataset => (
                <Option key={dataset.id} value={dataset.id}>{dataset.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="areaId" label="Area" rules={[{ required: true, message: 'Please select an area!' }]}>
            <Select placeholder="Select an area">
              {areas.map(area => (
                <Option key={area.id} value={area.id}>{area.name}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="co2Amount" label="CO2 Amount (in tons)" rules={[{ required: true, message: 'Please input the CO2 amount!' }]}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="year" label="Year" rules={[{ required: true, message: 'Please input the year!' }]}>
            <InputNumber min={1990} max={dayjs().year()} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
              Add Emission Data
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  );
}