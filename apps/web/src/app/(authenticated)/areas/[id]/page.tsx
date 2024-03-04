'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Card, Row, Col, Statistic } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function AreaEmissionsPage() {
  const { id: areaId } = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [area, setArea] = useState<any>(null)
  const [emissions, setEmissions] = useState<any[]>([])

  useEffect(() => {
    const fetchAreaAndEmissions = async () => {
      try {
        const [areaResponse] = await Api.Area.findMany({ filters: { id: { eq: areaId } }, includes: ['emissions'] })
        if (!areaResponse) {
          enqueueSnackbar('Area not found', { variant: 'error' })
          return
        }
        setArea(areaResponse)
        setEmissions(areaResponse.emissions ?? [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch area and emissions data', { variant: 'error' })
      }
    }

    fetchAreaAndEmissions()
  }, [areaId])

  return (
    <PageLayout layout="full-width">
      <Title level={2}><EnvironmentOutlined /> Area Emissions Details</Title>
      <Text>This page displays detailed CO2 emissions data for a specific area, allowing users to understand the environmental impact over time.</Text>
      <br />
      <br />
      {area && (
        <Card title={area.name} bordered={false}>
          <Row gutter={16}>
            <Col span={24}>
              <Statistic title="Dataset" value={area.dataset?.name || 'N/A'} />
              <Statistic title="Date Created" value={dayjs(area.dateCreated).format('DD/MM/YYYY')} />
            </Col>
          </Row>
          <br />
          <Title level={4}>Emissions Over Time</Title>
          <Row gutter={[16, 16]}>
            {emissions?.map((emission) => (
              <Col key={emission.id} xs={24} sm={12} md={8} lg={6}>
                <Card>
                  <Statistic
                    title={`Year: ${emission.year}`}
                    value={emission.co2Amount}
                    suffix="kg CO2"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
      )}
    </PageLayout>
  )
}