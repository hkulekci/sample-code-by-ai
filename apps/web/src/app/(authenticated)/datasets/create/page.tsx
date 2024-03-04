'use client'

import React, { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function CreateDatasetPage() {
  const [form] = Form.useForm()
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id

  const handleSubmit = async (values: Model.Dataset) => {
    try {
      await Api.Dataset.createOneByUserId(userId, {
        name: values.name,
        description: values.description,
        userId: userId,
      })
      enqueueSnackbar('Dataset created successfully', { variant: 'success' })
      router.push('/datasets')
    } catch (error) {
      enqueueSnackbar('Failed to create dataset', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={16} md={12}>
          <Title level={2}>Create New CO2 Emissions Dataset</Title>
          <Paragraph>
            Fill in the details below to create a new dataset related to CO2 emissions.
          </Paragraph>
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Dataset Name"
              rules={[{ required: true, message: 'Please input the dataset name!' }]}
            >
              <Input placeholder="Enter dataset name" />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: 'Please input the dataset description!' }]}
            >
              <Input.TextArea rows={4} placeholder="Enter dataset description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
                Create Dataset
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}